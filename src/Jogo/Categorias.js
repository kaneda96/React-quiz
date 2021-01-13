import React, { Component } from 'react'
import { Grid,Header,Segment, Icon } from "semantic-ui-react";

const tamanho = {
    width: 150,
    height: 150
}

class Categorias extends Component {
    render() {
        return (
            <div>
                <h1>Lista de Categorias</h1>
                <p>
                    Selecione a categoria que você quer responder
                </p>

                <Grid columns={5}>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment circular style={tamanho}>
                                <Header as='h2'>
                                    Esportes
                                    <Header.Subheader>
                                        <Icon name="trophy"></Icon>
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>                        
                        <Grid.Column>
                        <Segment circular style={tamanho}>
                                <Header as='h2'>
                                    Música
                                    <Header.Subheader>
                                    <Icon name="music"></Icon>
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                        <Segment circular style={tamanho}>
                                <Header as='h2'>
                                    Mundo
                                    <Header.Subheader>
                                    <Icon name="globe"></Icon>
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Categorias