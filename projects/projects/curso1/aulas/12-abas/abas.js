import React, { Component } from 'react'
import {
    Text,
    View,
} from 'react-native'

// npm install --save react-native-vector-icons

import TabNabigator from './services/routes'

export default class Abas extends Component{
    render(){
        return(
            <TabNabigator/>
        )
    }
}