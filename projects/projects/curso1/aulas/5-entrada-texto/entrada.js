import React, {Component} from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet
} from 'react-native'

export default class Entrada extends Component{
    state = {
        text: ''
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.headerfooter}></View>
                <View style = {styles.textContainer}>
                    <Text style = {styles.textFormat}>{this.state.text.split(' ').map( palavra => palavra ? ' 💬 ': '')}</Text>
                </View>
                <View style = {styles.inputContainer}>
                    <TextInput
                        style = {styles.inputFormat}
                        placeholder = "Digite alguma coisa"
                        onChangeText = { text => this.setState({text: text})}
                    
                    />
                </View>
                <View style = {styles.headerfooter}></View>

            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerfooter:{
        flex: 1,
        backgroundColor: 'lightgray'
    },
    inputContainer:{
        flex: 3
    },
    inputFormat:{
        width: 200,
        fontSize: 20
    },
    textContainer: {
        flex: 2
    },
    textFormat:{
        fontSize: 20
    }

})