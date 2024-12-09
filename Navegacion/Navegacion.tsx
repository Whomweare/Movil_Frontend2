import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from '../Pages/Home/Home';
import ProductoView from '../Pages/Producto/Producto';
import CarritoScreen from '../Pages/Carrito/Carrito';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={InicioScreen} />
      <Stack.Screen name="Detalle" component={ProductoView} />
      <Stack.Screen name="Carrito" component={CarritoScreen} />
    </Stack.Navigator>
  );
}