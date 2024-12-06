import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from '../Estilos/Detalles';
import { useNavigation } from '@react-navigation/native';

export default function DetallesComponent({route}) {
   
  const {elemento} = route.params;
  
  const navigation = useNavigation();

  return (
    <View style={styles.contenedorPrincipal}>

      <Image
        source={{ uri: 'https://th.bing.com/th/id/OIP.qaclxvlJyugAiqShPYObSAAAAA?w=395&h=500&rs=1&pid=ImgDetMain' }}
        style={styles.imagen}
      />

      <Text style={styles.texto}>Nombre: {elemento.nombre}</Text>
      <Text style={styles.texto}>Talla: {elemento.talla}</Text>
      <Text style={styles.texto}>Inventario: {elemento.inventario}</Text>
      <Text style={styles.texto}>Precio: {elemento.precio}</Text>

      <Pressable style={styles.pressable} onPress={() => {
        navigation.navigate('Carrito', {elemento: elemento});
      }}>

        <Text>Agregar al carrito</Text>

      </Pressable>

    </View>

  )
}