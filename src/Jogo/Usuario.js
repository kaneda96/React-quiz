import React from 'react'
import { List, Image } from "semantic-ui-react";

const Usuario = ({ foto, nome, pontos }) => {
    return (
        <List.Item>            
            <Image src={foto} size='tiny' bordered />
            <List.Content>                
                <List.Header as='b'>{nome}</List.Header>                
            </List.Content>       
            <List.Content>
                {pontos} Pontos
            </List.Content>
        </List.Item>
    )
}

export default Usuario