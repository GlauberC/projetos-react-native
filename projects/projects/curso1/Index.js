import React, {Component} from 'react'
import { Text, View} from 'react-native'

import Props from './aulas/1-props/props'
import State from './aulas/2-state/state'
import Style from './aulas/3-style/style'
import Dimensoes from './aulas/4-dimensoes/dimensoes'
import Entrada from './aulas/5-entrada-texto/entrada'

// Introdução ao React Native - Developer Plus
// https://www.youtube.com/watch?v=f_HhaLuK4ho&list=PLxF2lyHGcERApnjQPgeeEIzJJdGurraMW


export default class Index extends Component{
    render(){
        return(
            <Entrada/>
        )
    }
}