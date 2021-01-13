import React, { Component } from 'react'
import { Grid } from "semantic-ui-react";
import Categoria from "./Categoria";



class Categorias extends Component {
    render() {
        return (
            <div>
                <h2>Lista de Categorias</h2>
                <p>selecione a categoria que vôce quer responder perguntas</p>
                <Grid columns={5} divided>
                    <Categoria titulo="Esportes" icone="futbol outline" />
                    <Categoria titulo="Música" icone="music" />
                    <Categoria titulo="Mundo" icone="globe" />
                    <Categoria titulo="Games" icone="game" />
                    <Categoria titulo="Animais" icone="paw" />
                </Grid>
            </div>
        )
    }
}

export default Categorias;