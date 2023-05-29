import { Container } from "./styles";

export function Discover() {
    // const patinho = getAllBooks()

    const bookId = 'ID_DO_LIVRO'; // Substitua pelo ID real do livro
    const comment = 'Novo comentário'; // Substitua pelo comentário real
    async function teste() {
        fetch('/api/add-comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookId, comment }),
        })
        .then(response => response.text())
        .then(result => {
            console.log(result); // Exiba a resposta do servidor (mensagem de sucesso)
        })
        .catch(error => {
            console.error('Erro ao adicionar o comentário:', error); // Exiba o erro, se ocorrer
        });
    }
    return (
        <Container>sdsds
            <div>
                <button onClick={() => {teste}}></button>
            </div>
        </Container>
    )
}