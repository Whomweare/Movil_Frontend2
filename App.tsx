import * as React from 'react';
import { View} from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductosComponent from './Componentes/Productos';
import DetallesComponent from './Componentes/Detalles';
import CarritoComponent from './Componentes/Carrito';
import { createStackNavigator } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Detalles: { itemId: number};
};

const Stack = createStackNavigator<RootStackParamList>();

function HomeScreen() {
  
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ProductosComponent />
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Inicio',
  screens: {
    Inicio: HomeScreen,
    Detalles: DetallesComponent,
    Carrito: CarritoComponent
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {

  return <Navigation />;
}
