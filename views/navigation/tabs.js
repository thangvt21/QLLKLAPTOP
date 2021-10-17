import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Tab = createMaterialBottomTabNavigator();
const Tabs =()=>{
    return(
        <Tab.Navigator 
          barStyle= {{
            backgroundColor: 'black',
            shadowOffset: {width: 0, height:-2 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            elevation: 3
          }}    
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="home-filled" color={color} size={28} />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
            tabBarIcon: ({color}) => (
              <Icon name="shopping-cart" color={color} size={28} />
            ),
         }}
        />
    </Tab.Navigator>        
  );
};
export default Tabs;