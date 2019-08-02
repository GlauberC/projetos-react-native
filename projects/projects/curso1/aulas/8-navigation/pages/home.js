import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native'

export default class Home extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text> Home screen</Text>
                <Button
                    title = "Tela Perfil"
                    onPress = {() => this.props.navigation.navigate('ProfileScreen')}
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