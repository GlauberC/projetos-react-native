import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native'

export default class Home extends Component{
    render(){
        let dados = {
            nome: 'Glauber Carvalho',
            idade: '30'
        }
        return(
            <View style = {styles.container}>
                <Text>{dados.nome}</Text>
                <Text>{dados.idade}</Text>
                <Button
                    title = "Tela Perfil"
                    onPress = {() => this.props.navigation.navigate('ProfileScreen', {nome: dados.nome, idade: dados.idade})}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue'
    }
})