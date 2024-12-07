import { View, Text, Image, TextInput, Pressable, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from '../Estilos/Carrito';
import { useNavigation } from '@react-navigation/native';
import api from '../Servicios/Api';
import { ProductosInterface } from '../Modelos/Productos';

export default function CarritoComponent({ route }) {
  const { elemento } = route.params;
  const navigation = useNavigation();
  
  let [cantidad, setCantidad] = useState(0);
  let [envio, setEnvio] = useState(false);

  const [productos, setProductos] = useState<ProductosInterface[]>([]);

  const getCarrito = async () => {

    try {
      const response = await api.get('tbl_carrito');
      setProductos(response.data);
    } catch (error) {
      Alert.alert('Error', 'Ocurrio un error: ' + error);
    }

  };

  useEffect(() => {
    getCarrito();
  }, []);

  const suma = () => {
    setCantidad(prevCantidad => prevCantidad + 1);
  };

  const resta = () => {
    setCantidad(prevCantidad => prevCantidad - 1);
  };

  const tipoEnvio = () => {
    setEnvio(true);
    Alert.alert("Metodo enviod: Delivery")
  };

  useEffect(() => {

  }, [cantidad, envio]);

  return (
    <View style={styles.contenedorPrincipal}>
     
      <View style={styles.help}>
        <View style={styles.contenedorPrimera}>
          <Image source={{ uri: elemento.imagen }}
            style={styles.imagen}></Image>
        </View >

        <View style={styles.contenedorSegunda}>
          <Text style={styles.texto}>WebGL {elemento.nombre}</Text>
          <Text style={styles.texto}>Talla {elemento.talla}</Text>
          <Text style={styles.texto}>Precio L{elemento.precio}</Text>

          <View style={styles.contenedorBotones}>
            <Pressable style={styles.pressable} onPress={() => {
              resta();
            }}>
              <Text style={styles.textPressable}>-</Text>
            </Pressable>
            <TextInput placeholder='a' style={styles.textInput} value={JSON.stringify(cantidad)}></TextInput>
            <Pressable style={styles.pressable} onPress={() => {
              suma();
            }}>
              <Text style={styles.textPressable}>+</Text>
            </Pressable>
            <Text style={styles.textoPrecio}>L{elemento.precio * cantidad}</Text>
          </View>

        </View>
      </View>

      <View style={styles.contenedorTercera}>

        <Text>Envio</Text>

        <View style={styles.contenedorRadio}>
          <View style={styles.active}>
            <Pressable style={styles.radio} onPress={() => {
              tipoEnvio();
            }}>
            </Pressable>
          </View>
          <Text>Delivery L100.00</Text>
        </View>

        <View style={styles.contenedorRadio}>
          <View style={[styles.active]}>
            <Pressable style={styles.radio} onPress={() => {
              tipoEnvio();
            }}>
            </Pressable>
          </View>
          <Text>Retirar pedido gratis - Multiplaza Tegucigalpa</Text>
        </View>

        <View style={styles.contenedorSubTotal}>
          <Text style={styles.subTotal}>Sub-Total L{elemento.precio * cantidad}</Text>
          <View style={styles.hr}></View>
          <Text style={styles.subTotal}>Sub-Total L1,695.00</Text>
        </View>
        <Pressable style={styles.pressableComprar} onPress={() => {
          navigation.navigate('Factura', { elemento }, cantidad);
        }}>
          <Text>Comprar</Text>
        </Pressable>
      </View>

    </View>

  )
}