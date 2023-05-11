import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --green-100: #50B2C0;
        --green-200: #255D6A;
        --green-300: #0A313C;
        --purple-100: #8381D9;
        --purple-200: #2A2879;
        --gray-100: #F8F9FC;
        --gray-200: #E6E8F2;
        --gray-300: #D1D6E4;
        --gray-400: #8D95AF;
        --gray-500: #303F73;
        --gray-600: #252D4A;
        --gray-700: #181C2A;
        --gray-800: #0E1116;
    }

    body {
        margin: 0;
        padding: 0;
        
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 400;

        background-color: var(--gray-800);

        margin: auto;
        margin-top: 0.7rem;
        margin-left: 0.3rem;
    }

    @media(max-width: 1800px){
        html {
            font-size: 106.25%;
        }
    }

    @media(max-width: 1510px){
        html {
            font-size: 112.50%;
        }
    }

    @media(max-width: 1300px){
        html {
            font-size: 118.75%;
        }
    }

    @media(max-width: 400px){
        html {
            font-size: 140%;
        } 
    }
`