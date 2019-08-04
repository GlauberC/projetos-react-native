import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

import colors from '../styles/colors'
import typo from '../styles/typo'

export default props => (
    <View style = {styles.container}>
        <Text style = {styles.text}>{props.content}</Text>
    </View>
)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: colors.primary
    },
    text: typo.titlePrimary1
})