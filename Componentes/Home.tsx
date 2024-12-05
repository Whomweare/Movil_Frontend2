import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { createStaticNavigation, useNavigation} from '@react-navigation/native';

import styles from '../Estilos/App';
import { FontAwesome } from '@expo/vector-icons';
import ProductosComponent from './Productos';

export default function HomeScreen() {
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
          <Text style={styles.textoTitulo}>IHRI</Text>
        </View>
      </View>

      <View style={styles.contenedorBotonCategorias}>
                <Pressable style={styles.botonCategorias}>
                    <Text>Zapatos</Text>
                </Pressable>
                <Pressable style={styles.botonCategorias}>
                    <Text>Protesis</Text>
                </Pressable>
                <Pressable style={styles.botonCategorias}>
                    <Text>Plantillas</Text>
                </Pressable>
            </View>

      <View style={styles.contenedorContenido}>
   
        
      </View>
      {/*<Button onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>*/}
    </View>
  );
}

