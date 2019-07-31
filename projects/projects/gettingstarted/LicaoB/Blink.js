import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class Blink extends Component{
    state = {
        mostraTexto: true
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({mostraTexto: !this.state.mostraTexto})
        }, 500)
    }
    
    render(){

        
        return(
            <View>
                {this.state.mostraTexto? <Text>Está piscandoooooooooo</Text> : null}
            </View>
        )
    }
}