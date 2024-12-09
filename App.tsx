import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navegacion from './Navegacion/Navegacion';
import { CarritoProvider } from './Context/CarritoContext';

export default function App() {
  return (
    <CarritoProvider>
      <NavigationContainer>
        <Navegacion />
      </NavigationContainer>
    </CarritoProvider>
  );
}


// type RootStackParamList = {
//   Home: undefined;
//   Detalles: { itemId: number };
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <ProductosComponent />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Inicio">
//         <Stack.Screen name="Inicio" component={HomeScreen} />
//         <Stack.Screen name="Detalles" component={DetallesComponent} />
//         <Stack.Screen name="Carrito" component={CarritoComponent} />
//         <Stack.Screen name="Factura" component={FacturaComponent} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
