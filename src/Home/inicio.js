import React from 'react'
import { Container,Card,Button, CardContent } from "semantic-ui-react";

const Inicio = props => {
    return(
        <div>
            <Container>
            <Card>
                <Card.Header>
                    <Card.Meta>
                        Jogo de Perguntas e Respostas
                    </Card.Meta>
                    <CardContent>
                        Desafie os seus amigos neste incrível jogo de perguntas
                    </CardContent>
                    <CardContent>
                        <Button>Login com Facebook</Button>
                        <Button>Usuário Administrativo</Button>
                    </CardContent>
                </Card.Header>
            </Card>
            </Container>
        </div>
    )
}


export default Inicio