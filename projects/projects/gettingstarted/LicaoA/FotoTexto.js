import React, {Component} from 'react'
import {Text, Image, View, StyleSheet} from 'react-native'


export default class FotoTexto extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.saudacao}</Text>
                <Text>its me, {this.props.name}</Text>
                <Image source = {this.props.uri} style = {styles.imagem}/>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    imagem: {
        width: 128, 
        height: 128
    }
})