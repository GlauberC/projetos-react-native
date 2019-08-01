import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export default class Homescreen extends Component{
    render(){
        return(
            <View style = {styles.container} >
                <Text>Homescreen</Text>
                <View style = {styles.btns}>
                    <Button 
                        title = 'Profile'
                        onPress = {() => this.props.navigation.navigate('Profile')}
                        />
                    <Button
                    title = "Details"
                    onPress = {() => this.props.navigation.navigate("Details")}/>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    btns: {
        flexDirection: 'row',
    }
})