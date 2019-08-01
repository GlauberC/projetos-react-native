import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

export default class Style extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text1}>Vermelho</Text>
                <Text style = {styles.text2}>Azul</Text>
                <Text style = {[styles.text1, styles.text2]}>Sobreposição</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    text1: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 50,
    },
    text2: {
        color: 'blue'
    }
})