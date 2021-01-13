import React from 'react'
import { Grid, Header, Segment, Icon } from "semantic-ui-react";


const tamanho = {
    width: 150,
    height: 150
}

const Categoria = props => {
    return (
        <div>
            <Grid.Column>
                <Segment circular style={tamanho}>
                    <Header as='h2'>
                        {props.titulo}
                        <Header.Subheader>
                            <Icon name={props.icone}></Icon>
                        </Header.Subheader>
                    </Header>
                </Segment>
            </Grid.Column>
        </div>
    )
}

export default Categoria