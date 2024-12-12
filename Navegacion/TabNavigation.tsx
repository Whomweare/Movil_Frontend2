import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import InicioScreen from '../Pages/Home/Home'
import Carrito from '../Pages/Carrito/Carrito'


export default function NavegacionComponent() {

  const tabNavigation = createBottomTabNavigator()
  return (
    
    <NavigationContainer>

        <tabNavigation.Navigator initialRouteName='Home'>
            <tabNavigation.Screen name='Home' component={InicioScreen}></tabNavigation.Screen>
            <tabNavigation.Screen name='Carrito' component={Carrito}></tabNavigation.Screen>
          
        </tabNavigation.Navigator>
    </NavigationContainer>
  )
}