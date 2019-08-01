import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import Clock from './clock'

export default class State extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Clock/>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})