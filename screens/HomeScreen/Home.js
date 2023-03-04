import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MainHomeScreen from './MainHomeScreen';

const Stack = createStackNavigator();

const Home = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainHomeScreen" component={MainHomeScreen}/>
    </Stack.Navigator>
  )
}

export default Home