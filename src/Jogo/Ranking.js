import React, { Component } from 'react'
import { Container, List } from "semantic-ui-react";
import Usuario from './Usuario';

const foto = "https://media-exp1.licdn.com/dms/image/C4D03AQH82QW563K1eA/profile-displayphoto-shrink_200_200/0/1591909797244?e=1616025600&v=beta&t=AW8AXYLtFU8H0eCbyMsUSP-eZL15sliqDhmZITXCZeM"

class Ranking extends Component {
    render() {
        return (
            <div>
                <h2>Ranking</h2>
                <p>Quem é o mestre?</p>
                <Container>
                    <List divided verticalAlign='middle'>
                        <Usuario foto={foto} nome='Bruno Ferrari' pontos='100' />
                        <Usuario foto={foto} nome='Bruno Ferrari' pontos='100' />
                        <Usuario foto={foto} nome='Bruno Ferrari' pontos='100' />
                    </List>
                </Container>
            </div>
        )
    }
}

export default Ranking