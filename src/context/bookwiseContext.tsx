import { auth, providerGoogle, providerGitHub } from "../../config"
import { signInWithPopup } from "firebase/auth"

import { createContext, ReactNode, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface PreventDefault {
    preventDefault: Event["preventDefault"]
}

interface BookwiseContextType {
    value: [];
    teste: string
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
    const [ value, setValue ] = useState<[]>([])
    const [ teste, setTeste ] = useState<string>('')
    
    const navigate = useNavigate();

    function handleClickAuthGoogle(e: PreventDefault) {
        e.preventDefault()
        signInWithPopup(auth, providerGoogle).then((data) => {
            setValue(data.user)
            localStorage.setItem("email", data.user.email)
        }).then(() => {
            console.log('cheguei')
            navigate("/home");
          })
          .catch((error) => {
            console.log('error');
          });     
    }

    function handleClickAuthGitHub(e: PreventDefault) {
        e.preventDefault()
        signInWithPopup(auth, providerGitHub).then((data) => {
            setValue(data.user)
            localStorage.setItem("email", data.user.email)
        })
    }

    function handleClickAuthVisitor(e: PreventDefault) {
        e.preventDefault()
        setTeste('visitor')
        navigate("/home");
    }
    return (
        <BookwiseContext.Provider value={{ value, teste, handleClickAuthGitHub, handleClickAuthGoogle, handleClickAuthVisitor, setTeste }}>
            {children}
        </BookwiseContext.Provider>
    )
}
