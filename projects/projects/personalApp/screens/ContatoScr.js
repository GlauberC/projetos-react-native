import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
    
} from 'react-native'

import typo from '../styles/typo'

import Header from '../components/header'
import Sep from '../components/separador'
import IconText from '../components/iconText'

export default class ContatoScr extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Header content = 'Contato'/>
                <View style = {styles.contatoContainer}>
                    <View style = {styles.iconTextContainer}>
                        <Text style = {styles.titleText}>Dados: </Text>

                        <Sep/>

                        <IconText content = 'Glauber Carvalho' iconName = 'md-person'/>
                        <IconText content = 'glaubercarv@gmail.com' iconName = 'md-mail'/>
                        <IconText content = 'Natal/RN - Brasil' iconName = 'md-map'/>
                        <IconText content = '+55 84 996672799' iconName = 'md-phone-portrait'/>
                    </View>
                    <View style = {styles.iconTextContainer}>
                        <Text style = {styles.titleText}>Redes Sociais: </Text>

                        <Sep/>

                        <IconText content = '/glauberc' iconName = 'logo-github'/>
                        <IconText content = '/glaubercarv' iconName = 'logo-facebook'/>
                        <IconText content = '@glauber_carv' iconName = 'logo-instagram'/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contatoContainer: {
        flex: 9,
        paddingTop: 20,
        marginHorizontal: 20,
    },
    iconTextContainer: {
        flex: 4,
        marginBottom: 20
    },
    titleText: typo.titleSecondary1,

})