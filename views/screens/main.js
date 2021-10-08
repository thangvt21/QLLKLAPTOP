import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function main() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{headerShown:false}}
        ></Stack.Screen>
        <Stack.Screen
          name='Detail'
          component={DetailScreen} 
          options={{headerShown:false}}
        ></Stack.Screen>
      </Stack.Navigator>      
  );
}