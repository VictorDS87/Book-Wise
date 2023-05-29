import backgroundImage from "../../assets/components/nav/backgroundNav.svg"
import logoImage from "../../assets/components/nav/logo.svg"
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from "phosphor-react";

import { BackgroundImage, NotLoggedIn, Logo, Container, NavList, RetangleButtonSelected, NavInformations, UserProfile, SignInUser, SignOutUser } from "./styles";

import { useState, useContext } from "react";
import { BookwiseContext } from "../../context/bookwiseContext";

import { useNavigate } from "react-router-dom";

interface PreventDefault {
    preventDefault: Event["preventDefault"]
}

export function Nav() {
    const [start, setStart] = useState(true)
    const [explore, setExplore] = useState(false)
    const [profile, setProfile] = useState(false)

    const { user, teste} = useContext(BookwiseContext);

    const navigate = useNavigate();

    function handleNavSelectedStart(e: PreventDefault) {
        e.preventDefault()
        setStart(true)
        setExplore(false)
        setProfile(false)

        navigate("/home");
    }
    function handleNavSelectedExplore(e: PreventDefault) {
        e.preventDefault()
        setStart(false)
        setExplore(true)
        setProfile(false)
        
        navigate("/discover");
    }
    function handleNavSelectedProfile(e: PreventDefault) {
        e.preventDefault()
        setStart(false)
        setExplore(false)
        setProfile(true)

        navigate("/profile");
    }

    return (
        <Container>
            <BackgroundImage src={backgroundImage} alt="" />
            {user.displayName != '' || teste == 'visitor'?
            
                <NavList>
                    <Logo src={logoImage} alt="" />
                    <ul>
                        <li onClick={(e) => {handleNavSelectedStart(e)}}>
                            <RetangleButtonSelected disabled={start}/>
                            <NavInformations disabled={start}>
                                <ChartLineUp size={24}/> <p>Inicio</p> 
                            </NavInformations>
                        </li>

                        <li onClick={(e) => {handleNavSelectedExplore(e)}}>
                            <RetangleButtonSelected disabled={explore}/>
                            <NavInformations disabled={explore}>
                                <Binoculars size={24}/> <p>Explorar</p>         
                            </NavInformations> 
                        </li>

                        {teste == 'visitor' ?
                            <div></div>
                            :
                            <li onClick={(e) => {handleNavSelectedProfile(e)}}>
                                <RetangleButtonSelected disabled={profile}/>
                                <NavInformations disabled={profile}>
                                    <User size={24}/> <p>Perfil</p>
                                </NavInformations>
                            </li>
                        }

                    </ul>

                    <UserProfile>
                        {teste == 'visitor'?
                            <SignInUser disabled={true}>                
                                <p>Fazer login</p>
                                <SignIn size={22} />
                            </SignInUser>
                            :
                            <SignOutUser disabled={true}>
                                {user.photoURL && <img referrerPolicy="no-referrer" src={user.photoURL} alt="" />}
                                <p>{user.displayName}</p>
                                <SignOut size={22} />
                            </SignOutUser>
                        }               
                    </UserProfile>

                </NavList>

                : 
                <NotLoggedIn>Faça login</NotLoggedIn>
            }
        </Container>
    )
}