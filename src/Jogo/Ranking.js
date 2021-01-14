import React, { Component } from 'react'
import { Container, List ,Image} from "semantic-ui-react";

class Ranking extends Component {
    render() {
        return (
            <div>
                <h2>Ranking</h2>
                <p>Quem é o mestre?</p>
                <Container>
                    <List verticalAlign='left' divided>
                        <List.Item>
                            <List.Content floated='left'>
                                <Image src="https://media-exp1.licdn.com/dms/image/C4D03AQH82QW563K1eA/profile-displayphoto-shrink_200_200/0/1591909797244?e=1616025600&v=beta&t=AW8AXYLtFU8H0eCbyMsUSP-eZL15sliqDhmZITXCZeM" />
                                <p>Bruno Ferrari</p>
                            </List.Content>
                            <List.Content floated='right'>100 pontos</List.Content>
                        </List.Item>
                    </List>
                </Container>
            </div>
        )
    }
}

export default Ranking