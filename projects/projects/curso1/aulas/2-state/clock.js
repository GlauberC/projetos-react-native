import React, { Component } from 'react'
import {
    Text,
    StyleSheet
} from 'react-native'

export default class Clock extends Component{
    state = {
        date: new Date()
    }

    componentDidMount(){
        setInterval( () => {
            this.setState({date: new Date()})
        }, 1000)
    }

    render(){
        return(
            <Text style = {styles.time}>{this.state.date.toLocaleTimeString()}</Text>
        )
    }
}
let styles = StyleSheet.create({
    time: {
        fontSize: 50,
        fontWeight: "bold"
    }
})