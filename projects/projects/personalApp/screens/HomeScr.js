import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native'

import ImgPerfil from '../components/imgPerfil'
import Sep from '../components/separador'

import typo from '../styles/typo'
import colors from '../styles/colors'

export default class HomeScr extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.imgContainer}>
                    <ImgPerfil/>
                </View>
                <View style = {styles.textContainer}>
                    <Text style = {styles.titleText}>Glauber Carvalho</Text>
                    <Text style = {styles.normalText}>glaubercarv@gmail.com</Text>

                    <Sep/>

                    <Text style = {styles.normalText}>Brasileiro, 30 anos</Text>
                    <Text style = {styles.normalText}>Natal/RN - Brasil</Text>

                    <Sep/>

                    <Text style = {styles.normalText}>Desenvolvedor Front-End</Text>
                    <Text style = {styles.normalText}>Desenvolvedor Mobile</Text>
                </View>
                <View style = {styles.apresentacaoContainer}>
                    <Text style = {styles.normalText}><Text style = {styles.aspas}>“</Text>Sou um estudante apaixonado por tecnologia. Busco desafios para colocar em prática todo meu conhecimento em desenvolvimento web e mobile.</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary
    },
    imgContainer:{
        flex: 4,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    textContainer: {
        flex: 4,
        paddingVertical: 20,
        alignItems: 'center',
    },
    apresentacaoContainer: {
        flex: 2,
        paddingBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: colors.secondaryType2
    },
    aspas:{
        fontSize: 35,
        fontWeight: 'bold',
        color: colors.primary
    },
    titleText: typo.titleSecondary2,
    normalText: typo.normalSecondary3
})
