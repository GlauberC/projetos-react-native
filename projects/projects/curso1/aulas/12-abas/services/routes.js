import React, {Component} from 'react'
import {HomeScr, ProfileScr} from '../screens/screens'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TabNavigator = createBottomTabNavigator({
        Home: HomeScr,
        Profile: ProfileScr
    },

    // Textos
    // {
    //     tabBarOptions: {
    //         labelStyle: {
    //             fontSize: 25
    //         },
    //         activeTintColor: 'black',
    //         tabStyle: {
    //             backgroundColor: 'lightblue',
    //             borderTopColor: 'black',
    //             borderTopWidth: 1
    //         },
    //         inactiveTintColor: 'gray',
    //     }
    // }

    // Icons
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'white',
            style: {
                backgroundColor: '#694fad'
            },
            showLabel: false,
        },
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {

                const {routeName} = navigation.state
                let IconComponent = Ionicons
                let iconName

                if (routeName === 'Home'){
                    iconName = 'md-home'
                }else if(routeName === 'Profile'){
                    iconName = 'md-person'
                }

                return <IconComponent name = {iconName} size = {50} color = {tintColor}/>
            }
        })
    }

)

export default createAppContainer(TabNavigator)