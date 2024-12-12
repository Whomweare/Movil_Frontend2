import React, { useContext } from 'react';
import { View, Text, FlatList, Image, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CarritoContext } from '../../Context/CarritoContext';

import styles from '../../Estilos/Carrito';

export default function CarritoScreen() {
  
  const { carrito, limpiarCarrito, sumarCantidad, restarCantidad } = useContext(CarritoContext);
  const navigation = useNavigation();

  const total = carrito.reduce((suma, item) => suma + (parseFloat(item.precio) || 0), 0);
  

  const manejarCompra = () => {
    Alert.alert('Compra realizada', '¡Gracias por tu compra!');
    limpiarCarrito();
    navigation.navigate('Inicio');
  };


  return (
    <View style={styles.contenedor}>
      <FlatList
        data={carrito}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.imagen }} style={styles.imagen} />
            <Text style={styles.texto}>{item.nombre}</Text>
            <Text style={styles.texto}>{item.precio}</Text>
            
            <View style={styles.botonesCantidad}>
                {/* <Pressable style={styles.botonCantidad} onPress={() => restarCantidad(item.id_producto)}>
                  <Text style={styles.textoBoton}>-</Text>
                </Pressable> */}
                <Text style={styles.texto}>{item.cantidad}</Text>
                {/* <Pressable style={styles.botonCantidad} onPress={() => sumarCantidad(item.id_producto)}>
                  <Text style={styles.textoBoton}>+</Text>
                </Pressable> */}
              </View>
            
          </View>
        )}
      />
      <View style={styles.totalContenedor}>
        <Text style={styles.totalTexto}>Total: L.{total.toFixed(2)}</Text>
      </View>
      <Pressable style={styles.boton} onPress={() => navigation.navigate('Inicio')}>
        <Text style={styles.textoBoton}>Ver más productos</Text>
      </Pressable>

      <Pressable style={styles.botonComprar} onPress={manejarCompra}>
        <Text style={styles.textoBoton}>Comprar</Text>
      </Pressable>
   
    </View>
  );
}