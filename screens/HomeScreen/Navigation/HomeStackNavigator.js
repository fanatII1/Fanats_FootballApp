import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="LiveGameStats" component={LiveGameStats}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})