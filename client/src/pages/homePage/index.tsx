import { CaretRight, ChartLineUp, Star } from "phosphor-react";
import { AuthorAndTitle, Container, Content, Div, Header, InfoLastRating, LastRating, MyReview, PopularBooks, Rating, SummaryInfoBook, TopPopularBook } from "./styles";

import image from './images.png'
export function HomePage() {
    return (
        <Container>
            <Header><ChartLineUp color="#50B2C0"/> <p>Início</p></Header>
            <Content>
                <Rating>
                    <MyReview>
                        <Div>
                            <p>Sua última leitura</p>
                            <a href="">Ver todos <CaretRight /></a>
                        </Div>
                        <LastRating>
                            <SummaryInfoBook>
                                <img src={image} alt="" /> 
                                <InfoLastRating>
                                    <header>
                                        <p>3 Dias</p>

                                        <div>
                                            <Star weight="fill"/>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>

                                    </header>
                                    <AuthorAndTitle>
                                        <h1>Entendendo Algoritmos</h1>
                                        <p>Aditya Bhargava</p>
                                    </AuthorAndTitle>

                                    <span>
                                        Lorem ipsum dolor elit. Debitis,  fugiat, quisquam praesentium repudiandae deleniti labore dicta est 
                                    </span>
                                </InfoLastRating>
                            </SummaryInfoBook>
                        </LastRating>
                    </MyReview>

                    <div>
                        <div>
                            <p>reree</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </Rating>

                <PopularBooks>
                    <Div>
                        <p>Livros populares</p>
                        <a href="">Ver todos <CaretRight /></a>
                    </Div>
                    <TopPopularBook>
                        <img src={image} alt="" />

                        <div>
                            <AuthorAndTitle>
                                <h1>Entendendo Algoritmos</h1>
                                <p>Aditya Bhargava</p>
                            </AuthorAndTitle>
                            <div>
                                <Star weight="fill"/>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                        </div>
                    </TopPopularBook>
                </PopularBooks>
            </Content>
        </Container>
    )
}