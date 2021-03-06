import React from 'react';
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import MyBarters from '../screens/MyBarters';

export const AppDrawerNavigator= createDrawerNavigator({
    home:{screen:AppTabNavigator},
    setting:{screen:SettingScreen},
    MyBarters:{screen:MyBarters},
},

{contentComponent:CustomSideBarMenu},

{initialRouteName:'home'})

