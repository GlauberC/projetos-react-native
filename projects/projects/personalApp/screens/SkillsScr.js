import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    SectionList

} from  'react-native'

import colors from '../styles/colors'
import typo from '../styles/typo'

import Header from '../components/header'

import {linguagensProgramação, bancoDeDados, framesLibs, idiomas, outros} from '../assets/skills'


export default class SkillsScr extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Header content = 'Skills'/>
                <View style = {styles.listContainer}>
                    <SectionList
                        sections = {[
                            {title: 'Linguagens de Programação', data : linguagensProgramação},
                            {title: 'Banco de Dados', data : bancoDeDados},
                            {title: 'Frameworks / libs', data : framesLibs},
                            {title: 'Idiomas', data : idiomas},
                            {title: 'Outros', data : outros}
                        ]}
                        renderItem = {({item}) => <Text style = {[styles.itemSection, styles.itemSectionTypo]}> <Text style = {styles.arrow}> > </Text> {item}</Text>}
                        renderSectionHeader  = {({section}) => <Text style = {[styles.titleSection, styles.titleSectionTypo]}>{section.title}</Text>}
                        keyExtractor = {(item, index) => index}
                    />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    arrow:{
        color: colors.primary
    },
    listContainer: {
        flex: 9,
        paddingLeft: 20,
        marginBottom: 20
    },
    titleSection: {
        marginTop: 20
    },
    titleSectionTypo: typo.titleSecondary2,
    itemSection: {
        paddingHorizontal: 20,
        marginVertical: 5
    },
    itemSectionTypo: typo.normalSecondary2
})