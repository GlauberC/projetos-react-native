import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class Detailsscreen extends Component{
    render(){
        return(
            <View style = {styles.container} >
                <Text>Detailsscreen</Text>
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