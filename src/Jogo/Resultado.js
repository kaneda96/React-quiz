import React, {Component} from 'react'
import { List, Label,Container} from "semantic-ui-react";


class Resultado extends Component {
    render(){
        return(
            <div>
                <h2>Confira o seu desempenho:</h2>
                <p>Confira o seu desempenho nesta categoria</p>
                <Container>
                <List verticalAlign divided>
                    <List.Item>
                        <Label>1</Label>
                        Qualquer pergunta?
                        <List.Content floated='right'>3</List.Content>
                    </List.Item>
                    <List.Item>
                    <Label>2</Label>
                        Qualquer pergunta?
                        <List.Content floated='right'>1</List.Content>
                    </List.Item>
                    <List.Item>
                    <Label>3</Label>
                        Qualquer pergunta?
                        <List.Content floated='right'>2</List.Content>
                    </List.Item>                                     
                </List>
                </Container>
            </div>
        )
    }
}

export default Resultado