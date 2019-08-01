import React, {Component} from 'react'
import Nome from './Nome'
import {
    View,
    StyleSheet
} from 'react-native'



export default class Props extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Nome nome = "Glauber" />
                <Nome nome = "Paulo" />
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})