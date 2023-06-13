import styled from "styled-components";

export const Container = styled.div`
    margin-left: 23rem;
    margin-right: 5rem;
    color: white;

    `

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        font-size: 28px;
        
        svg {
            font-size: 28px;
            color: #50B2C0;
        }
    }
`

export const Input = styled.form`
    display: flex;
    align-items: center;
    
    border: 1px solid #303F73;
    border-radius: 4px;
    input {
        border: none;
        outline: none;
        background: #0E1116;
        width: 500px;
        height: 40px;
        padding-left: 1rem;

        color: rgba(141, 149, 175, 1);
    }

    button {
        display: flex;
        align-items: center;

        background-color: transparent;
        border: none;
        padding-right: 0.5rem;

        cursor: pointer;
        svg {
            font-size: 18px;
            color: white;
        }
    }
`
export const Category = styled.div`
    ul {
        display: flex;
        gap: 0.5rem;
        margin-left: -2.2rem;
        li {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px 16px;
            gap: 8px;
            height: 34px;
    
            border-radius: 999px;
            border: 1px solid rgba(131, 129, 217, 1);
            color: rgba(131, 129, 217, 1);
            background: transparent;
            font-size: 20px;
            
            button {
                &:disabled {
                    color: white;
                    background: #2A2879;
                }
            }
        }
    }
`
export const Books = styled.div`
    columns: 3;
`
export const Book = styled.div`
    height: 200px;
    background-color: #181C2A;
    margin-bottom: 2rem;
    
    display: flex;

    border-radius: 15px;

    img {
        margin-left: 2rem;
        margin-right: 2rem;
        margin: 1rem;
        
        flex: 1;
        border-radius: 8px;

        width: 100px;
    }

`


export const SummaryInfoBook = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    flex: 3;
    margin: 1rem;

`

export const AuthorAndTitle = styled.div`

    h1 {
        font-size: 1rem;
        color: rgba(248, 249, 252, 1);
    }

    p {
        font-size: 0.9rem;
        color: rgba(141, 149, 175, 1);
    }
`

export const Rating = styled.div`
    display: flex;

    svg {
        font-size: 1.3rem;
        color: #8381D9; 
    }
`

export const ButtonForSearchBookInApi = styled.button`
    background: transparent;
    border: none;
    border-bottom: 1px solid #8381d9;
    color: #50b2c0;

    cursor: pointer;
    transition: .4s;
    &:hover {
        color: #f75a68;
    }
`

//modal

export const Modal = styled.div`
`
export const List = styled.div`
    width: 390px;
    height: 600px;
    background: yellow;
    position: absolute;
`