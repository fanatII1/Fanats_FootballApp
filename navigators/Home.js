import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LiveGame from '../screens/HomeScreen/LiveGame/LiveGame';

const Stack = createStackNavigator();

const Home = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="LiveGame" component={LiveGame}/>
    </Stack.Navigator>
  )
}

export default Home