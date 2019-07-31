import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import FlexDirection from './FlexDirection';

export default class FlexSize extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.children1}></View>
                <View style = {styles.children2}></View>
                <View style = {styles.children3}></View>
                <View style = {styles.children4}></View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    children1:{
        flex: 1,
        backgroundColor: 'black'
    },
    children2:{
        flex: 3,
        backgroundColor: 'red'
    },
    children3:{
        flex: 2,
        backgroundColor: 'purple'
    },
    children4:{
        flex: 1,
        backgroundColor: 'green'
    },

})