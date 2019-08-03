import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

export default class Imagem extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.imgContainer}>
                    <Image source = {require('./assets/sonic.png')}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    imgContainer: {
        width: 128,
        height: 128
    }
})