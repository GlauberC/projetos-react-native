import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../styles/colors'
import typo from '../styles/typo'

export default props => (
    <View style = {styles.container}>
        <View style = {styles.iconContainer}>
            <Ionicons name={props.iconName} size = {32} color={colors.primary}/>
        </View>
        <View style = {styles.textContainer}>
            <Text style = {styles.textTypo}>{props.content}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    iconContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 4,
        justifyContent: 'center',
    },
    textTypo: typo.normalSecondary2
})