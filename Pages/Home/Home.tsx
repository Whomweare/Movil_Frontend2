import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../Servicios/Api';
import styles from '../../Estilos/Productos';
import { ProductosInterface } from '../../Modelos/Productos';

// interface ProductosInterface {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
// }

export default function InicioScreen() {
  const [productos, setProductos] = useState<ProductosInterface[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await api.get('tbl_producto');
        setProductos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getProductos();
  }, []);

  return (
    <View style={styles.contenedorPrincipal}>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id_producto.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={styles.item}
            onPress={() => navigation.navigate('Detalle', { producto: item })}
          >
            <Image source={{ uri: item.imagen.toString() }} style={styles.imagen} />
            <Text style={styles.texto}>{item.nombre}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}