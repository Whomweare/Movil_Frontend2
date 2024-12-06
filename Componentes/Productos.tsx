import React, { useState, useEffect } from 'react';
import { View, Text, Alert, FlatList, Image, Pressable } from 'react-native';
import { ProductosInterface } from '../Modelos/Productos';
import styles from '../Estilos/Productos';
import api from '../Servicios/Api';
import { useNavigation } from '@react-navigation/native';

export default function ProductosComponent() {

  const navigation = useNavigation();

  const [productos, setProductos] = useState<ProductosInterface[]>([]);
  
  let objeto;

  const getProductos = async () => {
    try {
      const response = await api.get('tbl_producto');
      setProductos(response.data);
    } catch (error) {
      Alert.alert('Error', 'Ocurrio un error: ' + error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <View style={styles.contenedorPrincipal}>

      <FlatList
        style={styles.flatList}
        data={productos}
        keyExtractor={(item) => item.id_producto.toString()}
        renderItem={({ item }) => (

          <View style={styles.productos}>
            <Pressable
              onPress={() => {
                objeto = item;
                navigation.navigate('Detalles', {elemento: objeto});
              }}
            >

              <Image
                source={{ uri: item.imagen}}
                style={styles.imagen}
              />
              
            </Pressable>
            <Text>{`L. ${item.id_producto} ${item.nombre}`}</Text>
          </View>

        )}
      />

    </View>
  );
}
