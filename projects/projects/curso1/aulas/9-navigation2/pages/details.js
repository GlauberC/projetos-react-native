import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native'

export default class Details extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.textContainer}>
                    <Text>Details screen</Text>
                </View>
                <View style = {styles.btnsContainer}>
                    <Button
                        title = 'Voltar'
                        color = 'orange'
                        onPress = {() => this.props.navigation.goBack()}
                    />
                    <Button 
                        title = 'Ir para Home'
                        color = 'red'
                        onPress = {() => this.props.navigation.popToTop()}
                    />

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'lightgray',
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnsContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    }
})