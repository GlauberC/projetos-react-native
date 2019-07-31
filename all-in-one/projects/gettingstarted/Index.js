import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class Index extends Component{
    render(){
        return(
            <View>
                <Text>Olá mundo</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  