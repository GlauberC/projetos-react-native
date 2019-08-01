import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

export default class Nome extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.font}>Meu nome é {this.props.nome}</Text>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#000000'
    },
    font:{
        color: '#ffffff',
        fontSize: 30
    }
})
