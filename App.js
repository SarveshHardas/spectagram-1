import React, {Componenet} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './navigation/drawNavigation';
import {NavigationContainer} from '@react-navigation/native';

export default class App extends Componenet {
  render()
  {
    return (
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer> 
    );
  }
}


