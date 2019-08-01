import React, {Component} from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Homescreen from './src/Homescreen'
import Profilescreen from './src/Profilescreen'
import Detailsscreen from './src/Detailsscreen'

export default class Index extends Component{
    render(){
        return(
            <AppContainer/>
        )
    }
}

const AppNavigator = createStackNavigator({
        Home: {
            screen: Homescreen,
        },
        Profile: {
            screen: Profilescreen
        },
        Details: {
            screen: Detailsscreen
        }
    },
    {
        initialRouteName: 'Home',
    }
)

const AppContainer = createAppContainer(AppNavigator)

