import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button

} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'

export default class HomeScr extends Component{
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({focused, tintColor}) => (
            <Ionicon name="md-home" size = {32} color = {tintColor}/>
        )
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text>Home Screen</Text>
                <View>
                    <Button
                        title = 'Settings'
                        onPress = {() => this.props.navigation.navigate('Settings') }
                    />
                </View>
                <View>

                    <Button
                        title = "OpenDrawer"
                        onPress = {() => this.props.navigation.toggleDrawer()}
                        />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'lightgreen'
    }
})