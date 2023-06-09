import { Binoculars, MagnifyingGlass, Star } from "phosphor-react";
import { AuthorAndTitle, Book, Books, Category, Container, Header, Input, Rating, SummaryInfoBook } from "./styles";
import { useEffect, useState } from "react";

import { useContext } from "react";
import { BookwiseContext } from "../../context/bookwiseContext";

export function Discover() {
    const { books } = useContext(BookwiseContext);
    const [modalIs, setModalIs ] = useState(false)

    useEffect(() => {
        if (modalIs) {
          document.body.classList.add('NoScroll');
        } else {
          document.body.classList.remove('NoScroll');
        }
    
        return () => {
          document.body.classList.remove('NoScroll');
        };
    }, [modalIs]);

    return (
        <Container>
            <Header>
                <p>
                    <Binoculars />
                    Explorer
                </p>
                <Input onSubmit={() => {console.log('ff')}}>
                    <input type="text" placeholder="Buscar autor ou livro"/>

                    <button type="submit">
                        <MagnifyingGlass color="#303F73" size={23}/>
                    </button>
                </Input>  
            </Header>
            <Category>
                <ul>
                    <li>Tudo</li>
                    <li>Computação</li>
                    <li>Educação</li>
                    <li>Fantasia</li>
                    <li>Ficção científica</li>
                    <li>Horror</li>
                    <li>HQs</li>
                    <li>Suspense</li>
                </ul>
            </Category>
            <Books>
                {books.map((book) => {
                    return (
                        <Book>
                            <img src={book.image} alt="" /> 
                            
                            <SummaryInfoBook>
                                <AuthorAndTitle>
                                    <h1>{book.title}</h1>
                                    <p>{book.author}</p>
                                </AuthorAndTitle>
                                <Rating>
                                    <Star weight="fill"/>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </Rating>
                            </SummaryInfoBook>
                        </Book>
                    )
                })
                }
            </Books>

            <section className="Modal">
        </section>
        </Container>
    )
}