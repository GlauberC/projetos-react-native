import React, {Component} from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

export default class Fixo extends Component{
    render(){
        return(
            <View>
                <View style = {styles.box1}></View>
                <View style = {styles.box2}></View>
                <View style = {styles.box3}></View>
                <View style = {styles.box4}></View>
            </View>
        )
    }
}
const sizeBox = 50

const styles = StyleSheet.create({
    box1:{
        width: sizeBox,
        height: sizeBox,
        backgroundColor: 'lightblue'
    },
    box2:{
        backgroundColor: 'powderblue',
        width: sizeBox * 2,
        height: sizeBox * 2,
    },
    box3:{
        backgroundColor: 'skyblue',
        width: sizeBox * 3,
        height: sizeBox * 3,
    },
    box4:{
        backgroundColor: 'blue',
        width: sizeBox * 4,
        height: sizeBox * 4,
    },
})