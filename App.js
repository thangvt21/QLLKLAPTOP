import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './views/navigation/tabs';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from './views/screens/DetailScreen';
import CartScreen from './views/screens/CartScreen';
const Stack = createStackNavigator();

const App = ()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={Tabs} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;