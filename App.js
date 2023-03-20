import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/LoginScreen/Login';
import Home from './navigators/Home';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import {} from 'react-native-screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Host, Portal } from 'react-native-portalize';

const Stack = createNativeStackNavigator();

// const Stack = createStackNavigator();

const App = () => {
  // console.log(matchOfTheDay)
  return (
    <NavigationContainer>
      <Host>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
      </Host>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})