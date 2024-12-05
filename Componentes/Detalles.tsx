import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from '../Estilos/Detalles';
import { useNavigation } from '@react-navigation/native';

export default function DetallesComponent() {

  const navigation = useNavigation();

  return (
    <View style={styles.contenedorPrincipal}>

      <Image
        source={{ uri: 'https://th.bing.com/th/id/OIP.qaclxvlJyugAiqShPYObSAAAAA?w=395&h=500&rs=1&pid=ImgDetMain' }}
        style={styles.imagen}
      />

      <Text style={styles.texto}>Nombre: WebGL Book</Text>
      <Text style={styles.texto}>Talla: 7.5</Text>
      <Text style={styles.texto}>Inventario: 100</Text>
      <Text style={styles.texto}>Precio: 500</Text>

      <Pressable style={styles.pressable} onPress={() => {
        navigation.navigate('Carrito');
      }}>

        <Text>Agregar al carrito</Text>

      </Pressable>

    </View>

  )
}