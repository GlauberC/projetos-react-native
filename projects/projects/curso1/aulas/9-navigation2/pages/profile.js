import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native'

export default class Profile extends Component{
    static navigationOptions = {
        title: 'Perfil',
        headerStyle: {
            backgroundColor: 'black'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text>{this.props.navigation.getParam('nome', 'Sem nome definido')}</Text>
                <Text>Idade: {this.props.navigation.getParam('idade', 'Sem idade definida')}</Text>
                <Button
                    title = "Ir para detalhes"
                    onPress = {() => this.props.navigation.navigate('DetailsScreen')}
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
        backgroundColor: 'lightgreen'
    }
})