import React from 'react'
import {
    View,
    Text,
    StyleSheet

} from 'react-native'


import colors from '../styles/colors'
import typo from '../styles/typo'

export default () => (
    <View style = {styles.container}>
        <Text style = {styles.text}>Glauber Carvalho - 2019</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    text: typo.normalLight2
    
})