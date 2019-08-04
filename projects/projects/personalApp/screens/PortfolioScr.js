import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

import Header from '../components/header'
import Project from '../components/project'

const projects = require('../assets/portifolios')

export default class PortfolioScr extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Header content = "Portfólio"/>
                <View style = {styles.portfolioContainer}>
                    <ScrollView>
                        {projects.map(project => <Project key = {project.id} title = {project.nome} descricao = {project.descricao} tags = {project.tags} />
                        )}

                    </ScrollView>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    portfolioContainer:{
        flex: 9
    }
})