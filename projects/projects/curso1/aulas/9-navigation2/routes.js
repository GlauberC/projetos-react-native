import React, {Component} from 'react'
import {
    Text,
    View
} from 'react-native'

import Home from './pages/home'
import Profile from './pages/profile'
import Details from './pages/details'


import {createStackNavigator, createAppContainer} from 'react-navigation'

const appNavigator = createStackNavigator(
    {
        HomeScreen: {
            screen: Home
        },
        ProfileScreen: {
            screen: Profile
        },
        DetailsScreen: {
            screen: Details
        },
    },
    {
        initialRouteName: 'HomeScreen'
    }
)

const AppContainer = createAppContainer(appNavigator)

export default class NewRoutes extends Component {
    render(){
        return(
            <AppContainer/>
        )
    }
}