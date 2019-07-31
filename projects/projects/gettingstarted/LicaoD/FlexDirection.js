import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class FlexDirection extends Component{
    render(){
        return(
            <View style = {styles.viewBox}>
                <View style = {styles.box1}></View>
                <View style = {styles.box2}></View>
                <View style = {styles.box3}></View>
                <View style = {styles.box4}></View>
            </View>
        )
    }
}
this.styles = StyleSheet.create({
    box1:{
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    box2:{
        width: 50,
        height: 50,
        backgroundColor: 'green'
    },
    box3:{
        width: 50,
        height: 50,
        backgroundColor: 'blue'
    },
    box4:{
        width: 50,
        height: 50,
        backgroundColor: 'black'
    },
    viewBox:{
        flex: 1,
        // flexDirection: 'row'
        // flexDirection: 'column'
        // flexDirection: 'row-reverse'
        flexDirection: 'column-reverse'
    }

})