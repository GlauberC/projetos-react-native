import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native'

export default class Profile extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>Profile screen</Text>
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