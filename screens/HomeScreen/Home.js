import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MainHomeScreen from './MainHomeScreen';
import LiveGame from './NavigationScreens/LiveGame';

const Stack = createStackNavigator();

const Home = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainHomeScreen" component={MainHomeScreen}/>
        <Stack.Screen name="LiveGame" component={LiveGame}/>
    </Stack.Navigator>
  )
}

export default Home