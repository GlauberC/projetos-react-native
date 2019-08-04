import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet

} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'

export default class SettingsScr extends Component{
    static navigationOptions = {
        drawerLabel: 'Settings',
        drawerIcon: ({focused, tintColor}) => (
            <Ionicon name = "md-settings" size = {32} color = {tintColor}/>
        )
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text>Settings Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    }
})