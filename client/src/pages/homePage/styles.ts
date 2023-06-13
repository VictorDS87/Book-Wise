import styled from "styled-components";

export const Container = styled.div`
    margin-left: 23rem;
    margin-right: 5rem;
`

export const Header = styled.div`
    display: flex;
    font-size: 1.7rem;
    align-items: center;
    gap: 0.5rem;

    p {
        color: #F8F9FC
    }
`

export const Content = styled.div`
    display: flex;
`

export const Rating = styled.div`
    flex: 4;
    margin-right: 2rem;
`

export const MyReview = styled.div`
    display: flex;
    flex-direction: column;
`

export const Div = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;

    p {
        width: 8 0%;
        color: #F8F9FC;
    }
    
    a {
        display: flex;
        align-items: center;
        color: #8381D9;

        gap: 0.5rem;
    }
`

export const LastRating = styled.div`
    display: flex;
    flex-direction: column;
    background: #252D4A;
    border-radius: 8px;
`


export const SummaryInfoBook = styled.div`
    display: flex;
    
    flex: 1;
    margin: 1rem auto;

    img {
        height: 160px;
        border-radius: 8px;
    }
`

export const InfoLastRating = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 8rem;
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            color: rgba(209, 214, 228, 1);
            font-size: 0.875rem;
        }

        svg {
            color: rgba(131, 129, 217, 1);
        }
    }
    span {
        color: rgba(209, 214, 228, 1);
        font-size: 0.875rem;
    }
    `

export const AuthorAndTitle = styled.div`

    h1 {
        font-size: 0.875rem;
        color: rgba(248, 249, 252, 1);
        margin-bottom: 0;
    }

    p {
        font-size: 0.875rem;
        color: rgba(141, 149, 175, 1);
        margin-top: 0.3rem;
    }
    `

export const PopularBooks = styled.div`
    margin-left: 0;
    flex: 2;
`

export const TopPopularBook = styled.div`
    background: rgba(24, 28, 42, 1);
    display: flex;

    border-radius: 8px;

    img {
        height: 130px;
        margin: 1rem;
        border-radius: 8px;
    }
`
