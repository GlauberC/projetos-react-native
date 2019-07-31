import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class Estilo extends Component{
    render(){
        return(
            <View>
                <Text style = {styles.bigRed}>Olá estilos</Text>
                <Text style = {styles.smallBlue}>Um breve exemplo sobre estilos</Text>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    bigRed:{
        color: 'red',
        fontWeight: 'bold',
        fontSize: 48
    },
    smallBlue:{
        fontSize:14,
        color: 'blue'
    }
})
