import React, { useContext } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { CarritoContext } from '../../Context/CarritoContext';
import styles from '../../Estilos/Detalles';

type DetalleRouteProp = RouteProp<{ Detalle: { producto: any } }, 'Detalle'>;

export default function DetalleScreen({ route }: { route: DetalleRouteProp }) {
  const { producto } = route.params;
  const navigation = useNavigation();
  const { agregarAlCarrito } = useContext(CarritoContext);

  return (
    <View style={styles.contenedor}>
      <Image source={{ uri: producto.imagen }} style={styles.imagen} />
      <Text style={styles.texto}>{producto.nombre}</Text>
      <Text style={styles.texto}>Precio: ${producto.precio}</Text>
      <Pressable style={styles.boton} onPress={() => agregarAlCarrito(producto)}>
        <Text style={styles.textoBoton}>Agregar al Carrito</Text>
      </Pressable>
      <Pressable style={styles.boton} onPress={() => navigation.navigate('Carrito')}>
        <Text style={styles.textoBoton}>Ir al Carrito</Text>
      </Pressable>
    </View>
  );
}