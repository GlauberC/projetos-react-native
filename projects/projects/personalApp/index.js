import React, {Component} from 'react'
import {
    Text,
    View
} from 'react-native'


// https://material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=2352dc&secondary.color=1b1c21

import TabsNavigator from './services/tabRoutes'

export default class Index extends Component{
    render(){
        return(
            <TabsNavigator/>
        )
    }
}