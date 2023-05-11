import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";

export function App() {
  return ( 
    <>
        <GlobalStyles />
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </>
  )
}

