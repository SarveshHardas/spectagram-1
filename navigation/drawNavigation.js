import React, { Component } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from "../screens/profile";
import TabNavigator from "./tabNavigator"

const Drawer = createDrawerNavigator

export default class DrawerNavigator extends Component
 { 
     render()
    { 
        return (
            <Drawer.Navigator >
                <Drawer.Screen name="Home"
                 component={TabNavigator} />
                    
                 <Drawer.Screen name="Profile"
                 component={Profile} />
            </Drawer.Navigator>
        )
    }
}