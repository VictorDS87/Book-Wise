import bookwiseImg from '../../assets/authPage/bookwise.svg'
import githubIcoImg from '../../assets/authPage/githubIcon.svg'
import googleIconImg from '../../assets/authPage/googleIcon.svg'
import rocketIconImg from '../../assets/authPage/rocketIcon.svg'

import { Bookwise, Container, Icon, Login, LoginMethods } from "./styles";

export function AuthPage() {
    return (
        <Container>
            <Bookwise>
                <img src={bookwiseImg} alt="logo do site bookwise em formato de livro" />
            </Bookwise>
            <Login>
                <header>
                    <h1>Boas Vindas!</h1>
                    <span>Faça seu login ou acesse como visitante</span>
                </header>

                <LoginMethods>
                    <button>
                        <Icon src={googleIconImg} alt="" />
                        <p>Entrar com Google</p>
                    </button>

                    <button>
                        <Icon src={githubIcoImg} alt="" />
                        <p>Entrar com GitHub</p>
                    </button>

                    <button>
                        <Icon src={rocketIconImg} alt="" />
                        <p>Acessar como visitante</p>
                    </button>
                </LoginMethods>
            </Login>
        </Container>
    )
}