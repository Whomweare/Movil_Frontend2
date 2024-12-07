import React from 'react'
import { View, Text, Image, Pressable, Alert } from 'react-native'
import styles from '../Estilos/Detalles';
import { useNavigation } from '@react-navigation/native';
import { CarritoInterface } from '../Modelos/Carrito';
import api from '../Servicios/Api';

export default function DetallesComponent({route}) {
   
  const {elemento} = route.params;
  const navigation = useNavigation();

  const nuevoProducto: CarritoInterface = {
    id_carrito: elemento.id_carrito,
    id_producto: elemento.id_producto, 
    cantidad: 0,
    precio_unitario: elemento.precio,
    precio_total: elemento.precio * 100,
  };

  const postProducto = async (nuevoProducto: Object) => {

    console.log(nuevoProducto);
    try {
      // nuevoEstudiante es un objeto con los datos del estudiante a registrar
      const response = await api.post('tbl_carrito', nuevoProducto);

      Alert.alert('Éxito', 'Producto agregado correctamente');
    } catch (error) {
      Alert.alert('Error', `Ocurrió un error al guardar el producto: ${error.message}`);
    }
  };


  return (
    <View style={styles.contenedorPrincipal}>

      <Image
        source={{ uri: elemento.imagen }}
        style={styles.imagen}
       
      />

      <Text style={styles.texto}>Nombre: {elemento.nombre}</Text>
      <Text style={styles.texto}>Talla: {elemento.talla}</Text>
      <Text style={styles.texto}>Inventario: {elemento.inventario}</Text>
      <Text style={styles.texto}>Precio: {elemento.precio}</Text>

      <Pressable style={styles.pressable} onPress={() => {
          postProducto(nuevoProducto);
        navigation.navigate('Carrito', {elemento: elemento});
      }}>

        <Text>Agregar al carrito</Text>

      </Pressable>

    </View>

  )
}