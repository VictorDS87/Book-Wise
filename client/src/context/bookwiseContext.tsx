import axios from "axios";
import { auth, providerGoogle, providerGitHub } from "../../config"
import { signInWithPopup } from "firebase/auth"

import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PreventDefault {
    preventDefault: Event["preventDefault"]
}

interface UserCredential {
    displayName: string | null
    email: string | null
    photoURL: string | null
    id: string | null
}

interface Book {
    id: string
    image?: string
    title: string
    description: string
    categories: string[]
    author: string
    pages: number
}

interface BookwiseContextType {
    user: UserCredential
    teste: string
    books: Book[]
    setTeste: (user: string) => void
    handleClickAuthGoogle: (e: PreventDefault) => void
    handleClickAuthGitHub: (e: PreventDefault) => void
    handleClickAuthVisitor: (e: PreventDefault) => void
}

interface BookWiseProviderProps {
    children: ReactNode
}


export const BookwiseContext = createContext({} as BookwiseContextType);

export function BookwiseProvider({ children }: BookWiseProviderProps) {
    const [ user, setUser ] = useState<UserCredential>({
        displayName: '',
        email: '',
        id: '',
        photoURL: ''
    })
    const [ teste, setTeste ] = useState<string>('')
    const [ books, setBooks ] = useState<Book[]>([])
    
    const navigate = useNavigate();

    function handleClickAuthGoogle(e: PreventDefault) {
        e.preventDefault()
        signInWithPopup(auth, providerGoogle).then((data) => {
            console.log(data.user)
            setUser({
                displayName: data.user.displayName,
                email: data.user.email,
                id: data.user.uid,
                photoURL: data.user.photoURL                
            })
            localStorage.setItem("email", data.user.email ?? "")
        }).then(() => {
            setTeste('')
            console.log('cheguei')
            navigate("/home");
          })
          .catch((error) => {
            console.log(error);
          });     
    }

    function handleClickAuthGitHub(e: PreventDefault) {
        e.preventDefault()
        signInWithPopup(auth, providerGitHub).then((data) => {
            setUser({
                displayName: data.user.displayName,
                email: data.user.email,
                id: data.user.uid,
                photoURL: data.user.photoURL                
            })
            localStorage.setItem("email", data.user.email ?? "")
        })
    }

    function handleClickAuthVisitor(e: PreventDefault) {
        e.preventDefault()
        setTeste('visitor')
        navigate("/home");
    }

    async function fetchBooks() {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=junji&maxResults=30&key=AIzaSyC8XHeNGgGKwknGboCRTzLIB6aiIGZm2cQ')
        console.log(response.data.items)
        
        if(books.length > 0 ) {
            console.log('não repeti')
        } else {
            const booksArray = []; 

            for (let i = 0; i < response.data.items.length; i++) {
                console.log(i)
                const book = {
                  id: response.data.items[i].id,
                  image: response.data.items[i].volumeInfo?.imageLinks?.thumbnail,
                  title: response.data.items[i].volumeInfo.title,
                  categories: response.data.items[i].volumeInfo.categories,
                  author: response.data.items[i].volumeInfo.authors[0],
                  description: response.data.items[i].volumeInfo.description,
                  pages: response.data.items[i].volumeInfo.pageCount,
                };
                
                booksArray.push(book);
              }
              
              setBooks(booksArray); 

        }
          
    }
    useEffect(() => {
        fetchBooks()
    }, [])
    return (
        <BookwiseContext.Provider value={{ user, teste, books, handleClickAuthGitHub, handleClickAuthGoogle, handleClickAuthVisitor, setTeste }}>
            {children}
        </BookwiseContext.Provider>
    )
}
