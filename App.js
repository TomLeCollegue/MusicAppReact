import { StyleSheet, Text, View, Image, StatusBar, } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreenView from './screens/homeScreenView'
import CreditView from './screens/creditScreen'
import * as Font from 'expo-font';






const Stack = createStackNavigator()
const ColorBack = '#D7D7D9'

export default function App(){
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="Home" component={HomeScreenView} />
        <Stack.Screen name="Credit" component={CreditView} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

