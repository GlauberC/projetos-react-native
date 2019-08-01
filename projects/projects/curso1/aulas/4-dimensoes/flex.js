import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Button
} from 'react-native'

export default class Flex extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.box1}></View>
                <View style = {styles.box2}></View>
                <View style = {styles.box3}></View>
                <View style = {styles.box4}></View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    box1:{
        backgroundColor: 'lightblue',
        flex: 1
    },
    box2:{
        backgroundColor: 'powderblue',
        flex: 2
    },
    box3:{
        backgroundColor: 'skyblue',
        flex: 3
    },
    box4:{
        backgroundColor: 'blue',
        flex: 4
    },
})

// Propriedades FlexBox
/*
    Flex Direction
        - row
        - column

    Justify Content
        - flex-start
        - center
        - flex-end
        - space-around
        - space-between
        - space-evenly

    Align Items
        - flex-start
        - center
        - flex-end
        - stretch

*/

