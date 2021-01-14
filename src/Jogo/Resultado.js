import React, {Component} from 'react'
import { List} from "semantic-ui-react";
import Resposta from './Resposta'

const resposta= {
    id: 1,
    titulo: 'Primeira pergunta',
    alternativa: 3,
}

class Resultado extends Component {
    render(){
        return(
            <div>
                <h2>Confira o seu desempenho:</h2>
                <p>Confira o seu desempenho nesta categoria</p>                
                <Container>
                <List verticalAlign='left' divided>
                  <Resposta Resposta={resposta}></Resposta> 
                </List>                
                </Container>
            </div>
        )
    }
}

export default Resultado