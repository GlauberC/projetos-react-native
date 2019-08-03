import React from 'react'
import {
    View,
    Image,
    StyleSheet
} from 'react-native'

import colors from '../styles/colors'

export default () => (
    <View style = {styles.imgContainer}>
        <Image style = {styles.imgStyle} source = {require('../assets/fotoPerfil.png')}/>
    </View>
)
const styles = StyleSheet.create({
    imgContainer: {
        width: 160,
        height: 160,
    },
    imgStyle: {
        borderWidth: 2,
        borderColor: colors.secondaryLight,
        borderRadius: 160
    }
})