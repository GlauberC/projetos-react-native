import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

import colors from '../styles/colors'

export default () => (
    <View style = {styles.sep}></View>
)

const styles = StyleSheet.create({
    sep: {
        marginVertical: 10,
        width: 70,
        height: 2,
        backgroundColor: colors.primary

    }
})