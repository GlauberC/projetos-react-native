import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

import colors from '../styles/colors'
import typo from '../styles/typo'

import Sep from './separador'

export default props => (
    <View style = {styles.container}>
        <View style = {styles.titleDescricaoContainer} >
            <Text style = {styles.titleText}>{props.title}</Text>
            <Text style = {styles.descricaoText}>{props.descricao}</Text>
        </View>
        <View style = {styles.tagsContainer}>
            {props.tags.map(tag => <Text key = {tag} style = {styles.tagsText}> {'#' + tag} </Text>)}
        </View>
        <Sep/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 4
    },
    titleDescricaoContainer:{
        flex: 3,
        marginLeft: 20
    },  
    tagsContainer:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 30
    },
    titleText: typo.titleSecondary2,
    descricaoText: typo.normalSecondary3,
    tagsText: typo.normalTertiary
})