import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-top: 1.1rem;
`

export const Bookwise = styled.div`
    flex: 5.3;
    margin-left: 0.5rem;
    img {
        width: 600px;
        
        @media(max-width: 1800px){
            width: 540px;
        }

        @media(max-width: 1510px){
            width: 468px;
        }
        
        @media(max-width: 1300px){
            width: 388px;
        }
        
        @media(max-width: 500px){
            display: none;           
        }
    }
`

export const Login = styled.div`
    flex: 4;
    
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    flex-wrap: wrap;
    justify-content: center;

    header {
        margin-bottom: 2.5rem;

        h1 {
            font-size: 2rem;
            color: #F8F9FC;

            margin-bottom: 0;
        }

        span {
            color: #E6E8F2;
            font-size: 1rem;

            margin-top: 0;
        }
    }   
`

export const LoginMethods = styled.div`
    button {
        p {
            font-family: "Nunito Sans", "sans-serif";
        }

        width: 334px;
        height: 72px;
        
        display: flex;
        align-items: center;
        gap: 1rem;
        
        margin: auto;
        margin-bottom: 1rem;
        
        font-weight: 700;
        font-size: 0.85rem;
        
        color: #E6E8F2;
        background: #252D4A;

        border: none;
        border-radius: 8px;
    
        img {
            margin-left: 2rem;
        }

        cursor: pointer;
        
        &:hover {
            transition: .4s;
            filter: brightness(0.8);
        }
    }
    `

export const Icon = styled.img`

`