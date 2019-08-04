import React, {Component} from 'react'
import {HomeScr, PortfolioScr, SkillsScr, ContatoScr} from '../screens/screens'
import { createBottomTabNavigator, createAppContainer} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import colors from '../styles/colors'

const TabsNavigator = createBottomTabNavigator({
        Home: HomeScr,
        Portfolio: PortfolioScr,
        Skills: SkillsScr,
        Contato: ContatoScr
    },{
        tabBarOptions: {
            labelStyle: {
                fontSize: 14
            },
            activeTintColor: colors.tertiary,
            inactiveTintColor: colors.secondary,
            style: {
                backgroundColor: colors.primary,
                borderTopWidth: 1,
                borderTopColor: colors.secondaryType2,
            }
        },
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state
                let IconComponent = Ionicons
                let iconName

                if(routeName === 'Home'){
                    iconName = 'md-home'
                }else if (routeName === 'Portfolio'){
                    iconName = 'md-folder'
                }else if (routeName === 'Skills'){
                    iconName = 'md-hammer'
                }else if (routeName === 'Contato'){
                    iconName = 'md-person'
                }

                return <IconComponent name = {iconName} size = {20} color = {tintColor}/>
            }
        })
    }


)

export default createAppContainer(TabsNavigator)