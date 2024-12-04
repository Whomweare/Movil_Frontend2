import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import styles from './Estilos/Estilos';
import { FontAwesome } from '@expo/vector-icons';
import AsignaturaComponent from './Components/Asignatura';
function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.contenedorPrincipal}>

      {/* Menú */}
      <View style={styles.menu}>
        <View style={styles.contenedorIconos}>
          {/* Ícono a la izquierda */}
          <View style={styles.izquierda}>
            <FontAwesome style={styles.icono} name="home" size={30} color="gray" />
          </View>
          {/* Ícono al centro */}
          <View style={styles.centro}>
            <FontAwesome style={styles.icono} name="shopping-cart" size={30} color="gray" />
          </View>
          {/* Ícono a la derecha */}
          <View style={styles.derecha}>
            <FontAwesome style={styles.icono} name="bars" size={30} color="gray" />
          </View>
        </View>
        <View style={styles.contenedorIconosSinBorde}>
          <Text style={styles.textoTitulo}>INHRI</Text>
        </View>
      </View>

      <View style={styles.contenedorBotonCategorias}>
                <Pressable style={styles.botonCategorias} onPress={() => navigation.navigate('Details')}>
                    <Text>Categorias</Text>
                </Pressable>
            </View>

      <View style={styles.contenedorContenido}>
        {/*<Descripcion></Descripcion>*/}
        <AsignaturaComponent></AsignaturaComponent>

      </View>
      {/*<Button onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>*/}
    </View>
  );
}

// ... other code from the previous section

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    Details: AsignaturaComponent,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
