import React, {Component} from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity, Button} from 'react-native'

export default class Index extends Component{
    state = {
        player: 0,
        cpu: -1,
        resultado: ''
    }

    escolha = (n) => {
        this.setState({player: n, cpu: -1, resultado: ''})
    }

    jogar = () => {
        let jogador = this.state.player
        let cpu = Math.floor(Math.random()*3)
        this.setState({cpu: cpu})
        if(jogador === cpu){
            this.setState({resultado: 'Essa rodada terminou empatada'})
        }else if (Math.abs(jogador - cpu) === 1){
            if (jogador < cpu ){
                this.setState({resultado: 'Parabéns, você venceu a rodada'})
            }else{
                this.setState({resultado: 'Você foi derrotado nesta rodada'})
            }
        }else{
            if (jogador > cpu ){
                this.setState({resultado: 'Parabéns, você venceu a rodada'})
            }else{
                this.setState({resultado: 'Você foi derrotado nesta rodada'})
            }
        }
    }

    stylesBoard = StyleSheet.create({
        border: {
            borderRadius: 20,
            borderWidth: 4,
            borderColor: 'black',
        }
    })

    render(){
        let imagePapel = './img/papel.png'
        let imagePedra = './img/pedra.png'
        let imageTesoura = './img/tesoura.png'
        
        return(
            <View style = {styles.container}>
                <View style = {styles.tituloContainer}><Text style = {styles.tituloFont}>Pedra Papel e Tesoura</Text></View>
                <View style = {styles.resultadoContainer}><Text style = {styles.resultadoFont}>{this.state.resultado}</Text></View>
                <View style = {styles.pcPlayerContainer}>
                    {this.state.cpu === 0 ? <Image style={styles.img} source={require(imagePapel)} /> : <View></View>}
                    {this.state.cpu === 1 ? <Image style={styles.img} source={require(imagePedra)} /> : <View></View>}
                    {this.state.cpu === 2 ? <Image style={styles.img} source={require(imageTesoura)} /> : <View></View>}
                </View>
                <View style = {styles.jogarContainer}>
                    <TouchableOpacity style = {styles.btn} onPress={()=>this.jogar()}>
                        <Text style = {styles.btnFont}>Jogar</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.pcPlayerContainer}>
                    <TouchableOpacity style = {this.state.player === 0? this.stylesBoard.border : {}} onPress={()=>this.escolha(0)}>
                        <Image style={styles.img} source={require(imagePapel)} />
                    </TouchableOpacity>
                    <TouchableOpacity  style = {this.state.player === 1? this.stylesBoard.border : {}} onPress={()=>this.escolha(1)}>
                        <Image style={styles.img} source={require(imagePedra)} />
                    </TouchableOpacity>
                    <TouchableOpacity  style = {this.state.player === 2? this.stylesBoard.border : {}} onPress={()=>this.escolha(2)}>
                        <Image style={styles.img} source={require(imageTesoura)} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



let fundo1 = "#000000"
let fundo2 = "#ffffff"
let fontColor1 = "#ffffff"
let fontColor2 = "#000000"

let styles = StyleSheet.create({
    container:{
        flex:1
    },
    tituloContainer: {
        flex: 1,
        backgroundColor: fundo1,
        alignItems: 'center',
        justifyContent: "center"
    },
    tituloFont:{
        color: fontColor1,
        fontSize: 30
    },
    resultadoContainer: {
        flex: 1,
        backgroundColor: fundo2,
        alignItems: 'center',
        justifyContent: "flex-end"
    },
    resultadoFont:{
        color: fontColor2,
        fontSize: 20,
        fontWeight: 'bold'
    },
    pcPlayerContainer: {
        flex: 2,
        backgroundColor: fundo2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    img:{
        width: 64,
        height: 64
    },
    btn:{
        backgroundColor: fundo1,
        paddingHorizontal: 70,
        paddingVertical: 10
    },
    btnFont:{
        color: fontColor1,
        fontSize: 20
        
    },
    jogarContainer: {
        flex: 1,
        backgroundColor: fundo2,
        alignItems: 'center',
        justifyContent: "center"
    },
})