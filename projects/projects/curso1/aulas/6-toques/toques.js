import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Button,
    Alert
} from 'react-native'

export default class Toques extends Component{
    state = {
        nClicks: 0
    }
    
    exibeAlerta(){
        let nClicks = this.state.nClicks + 1
        this.setState({nClicks: nClicks})
        return Alert.alert(`Você clicou no botão! ${nClicks} vezes`)
    }
    

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.headerRodape}></View>
                <View style = {styles.btnContainer}>
                    <Button
                        title = "Alerta aqui"
                        onPress = {() => this.exibeAlerta()}
                        color = 'blue'
                    />
                </View>
                <View style = {styles.btnSideContainer}>
                    <Button
                        title = "Botão esquerda"
                        onPress = {() => this.exibeAlerta()}
                        color = 'red'
                    />
                    <Button
                        title = "Botão direita"
                        onPress = {() => this.exibeAlerta()}
                        color = 'green'
                    />
                </View>
                <View style = {styles.container}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerRodape: {
        flex: 1
    },
    btnContainer:{
        flex: 1
    }, 
    btnSideContainer: {
        flexDirection: 'row',
        justifyContent: "space-around"
    }
})