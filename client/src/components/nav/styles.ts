import styled, { keyframes } from "styled-components";



export const Container = styled.div`
    position: fixed;
    `

export const BackgroundImage = styled.img`
    box-shadow: 0 1px 10px 0 rgba(42, 40, 121, 0.3);
    position: fixed;
    left: 10px;
    width: 280px;
    border-radius: 10px;
    z-index: -100;
    `

export const Logo = styled.img`
    margin-top: 2.5rem;
    margin-bottom: 4rem;
    `

export const NavList = styled.div`
    height: 95vh;
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    ul {
        margin-left: -2.3rem;
        
        li {
            display: flex;
            gap: 0.5rem;
            
            list-style: none;

        }

        li+li {
            margin-top: 1rem;
        }
    }
    `

export const NavInformations = styled.button`
    height: 25px;

    background: transparent;
    border: none;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    font-weight: 700;
    font-size: 1rem;
    color: #8D95AF;

    cursor: pointer;
    transition: .4s;

    &:hover {
        color: #F8F9FC;
    }

    &:disabled {
        color: #F8F9FC;
    }
`

export const RetangleButtonSelected = styled.button`
    padding: 2px;
    background-color: transparent;
    border: none;
    margin-right: 0;
    
    transition: .8s;
    &:disabled {
        margin-right: 0.5rem;
        height: auto;
        padding: 2px;
        border-radius: 2px;
        background: linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%);
    }
`

const moveButton = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const UserProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    margin-top: 15rem;

    img {
        width: 27px;
        border-radius: 20px;
    }

    p {
        font-size: 14px;
        color: #E6E8F2;
    }
`

const SignInOutBaseButton = styled.button`
    height: 25px;

    background: transparent;
    border: none;

    display: flex;
    align-items: center;
    gap: 0.3rem;
    
    font-weight: 700;
    font-size: 1rem;
    color: #8D95AF;
`

export const SignInUser = styled(SignInOutBaseButton)`
    svg {
        cursor: pointer;
        animation: ${moveButton} 0.5s linear infinite;
        
        &:hover {
            animation-play-state: paused;
            transition: .3s;
            color: #F75A68;
        }
    }

`

export const SignOutUser = styled(SignInOutBaseButton)`
    svg {
        cursor: pointer;
        animation-play-state: paused;
        
        &:hover {
            animation: ${moveButton} 0.5s linear infinite;
            transition: .3s;
            color: #F75A68;
        }
    }
`

export const NotLoggedIn = styled.div`
    margin-left: 5rem;
`