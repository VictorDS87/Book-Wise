import { auth, providerGoogle, providerGitHub } from "../../config"
import { signInWithPopup } from "firebase/auth"

import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PreventDefault {
    preventDefault: Event["preventDefault"]
}

interface BookwiseContextType {
    user: UserCredential[]
    teste: string
    setTeste: (user: string) => void
    handleClickAuthGoogle: (e: PreventDefault) => void
    handleClickAuthGitHub: (e: PreventDefault) => void
    handleClickAuthVisitor: (e: PreventDefault) => void
}

interface BookWiseProviderProps {
    children: ReactNode
}

interface UserCredential {
    displayName: string | null
    email: string | null
    photoURL: string | null
    id: string | null
}

export const BookwiseContext = createContext({} as BookwiseContextType);

export function BookwiseProvider({ children }: BookWiseProviderProps) {
    const [ user, setUser ] = useState<UserCredential[]>([])
    const [ teste, setTeste ] = useState<string>('')
    
    const navigate = useNavigate();

    function handleClickAuthGoogle(e: PreventDefault) {
        e.preventDefault()
        signInWithPopup(auth, providerGoogle).then((data) => {
            console.log(data.user)
            setUser((state) =>[...state, {
                displayName: data.user.displayName,
                email: data.user.email,
                id: data.user.uid,
                photoURL: data.user.photoURL                
            }])
            localStorage.setItem("email", data.user.email ?? "")
        }).then(() => {
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
            setUser((state) =>[...state, {
                displayName: data.user.displayName,
                email: data.user.email,
                id: data.user.uid,
                photoURL: data.user.photoURL                
            }])
            localStorage.setItem("email", data.user.email ?? "")
        })
    }

    function handleClickAuthVisitor(e: PreventDefault) {
        e.preventDefault()
        setTeste('visitor')
        navigate("/home");
    }
    return (
        <BookwiseContext.Provider value={{ user, teste, handleClickAuthGitHub, handleClickAuthGoogle, handleClickAuthVisitor, setTeste }}>
            {children}
        </BookwiseContext.Provider>
    )
}
