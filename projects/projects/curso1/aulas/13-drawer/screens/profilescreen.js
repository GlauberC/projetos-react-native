import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet

} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'

export default class ProfileScr extends Component{
    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon: ({focused, tintColor}) => (
            <Ionicon name = "md-person" size = {32} color = {tintColor}/>
        )
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text>Profile Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightcoral'
    }
})