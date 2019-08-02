import React, {Component} from 'react'

import Props from './aulas/1-props/props' // aula - 1
import State from './aulas/2-state/state' // aula - 2
import Style from './aulas/3-style/style' // aula - 3
import Dimensoes from './aulas/4-dimensoes/dimensoes' // aula - 4
import Entrada from './aulas/5-entrada-texto/entrada' // aula - 5
import Toques from './aulas/6-toques/toques' // aula - 6
import List from './aulas/7-list/list' // aula - 7
import Routes from './aulas/8-navigation/routes'  // aula - 8
import NewRoutes from './aulas/9-navigation2/routes' // aula - 9


// Introdução ao React Native - Developer Plus
// https://www.youtube.com/watch?v=f_HhaLuK4ho&list=PLxF2lyHGcERApnjQPgeeEIzJJdGurraMW


export default class Index extends Component{
    render(){
        return(
            <NewRoutes/>
        )
    }
}