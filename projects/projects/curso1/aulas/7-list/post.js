import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

export default class Post extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.fotoContainer}>
                    <View style = {styles.fotoImage}>
                    </View>
                </View>
                <View style = {styles.postTextContainer}> 
                    <Text style = {styles.textName}>{this.props.name}</Text>
                    <Text>{this.props.msg}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: 'lightgray',
        marginBottom: 10,
        paddingBottom: 10
    },
    fotoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fotoImage:{
        width: 50,
        height: 50,
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50
    },
    postTextContainer: {
        paddingLeft: 10,
        flex: 3
    },
    textName:{
        fontWeight: 'bold',
        fontSize: 18
    }
})