import React,{Component} from 'react'
import { Image, View, Text, StyleSheet} from 'react-native'
import FotoTexto from './FotoTexto'


export default class Aprops extends Component{

    render(){
        let picMario = {
            uri: 'https://pm1.narvii.com/6282/fe60448e868d57be3a23e1ee036a11a90093fac6_128.jpg'
        }
        let picLuigi = {
            uri: 'https://vignette.wikia.nocookie.net/universomario/images/5/50/MP9_Select_Luigi.png/revision/latest?cb=20120813200701&path-prefix=pt'
        }
        return(
            <View>
                <FotoTexto saudacao = "Hello," name = "Mário" uri = {picMario} />
                <FotoTexto saudacao = "Hola," name = "Luigi" uri = {picLuigi}/>
            </View>
        )
    }
}



// Observações
    /*
    uri com I e não url com L
    */