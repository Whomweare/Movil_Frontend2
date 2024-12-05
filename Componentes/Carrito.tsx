import { View, Text, Image, TextInput, Pressable } from 'react-native'
import React from 'react'

import styles from '../Estilos/Carrito';


export default function CarritoComponent() {
  return (
    <View style={styles.contenedorPrincipal}>
      <View style={styles.help}>
        <View style={styles.contenedorPrimera}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.qaclxvlJyugAiqShPYObSAAAAA?w=395&h=500&rs=1&pid=ImgDetMain' }}
            style={styles.imagen}></Image>
        </View >

        <View style={styles.contenedorSegunda}>
          <Text style={styles.texto}>WebGL Book</Text>
          <Text style={styles.texto}>Talla 7.5</Text>
          <Text style={styles.texto}>Precio L 1,500</Text>

          <View style={styles.contenedorBotones}>
            <Pressable style={styles.pressable}>
              <Text style={styles.textPressable}>-</Text>
            </Pressable>
            <TextInput placeholder='a' style={styles.textInput}></TextInput>
            <Pressable style={styles.pressable}>
              <Text style={styles.textPressable}>+</Text>
            </Pressable>
            <Text style={styles.textoPrecio}>L 1,500</Text>
          </View>
        </View>
      </View>

      <View style={styles.contenedorTercera}>
        <Text>Envio</Text>

        <View style={styles.contenedorRadio}>
          <TextInput style={styles.radio}></TextInput>
          <Text>Delivery L100.00</Text>
        </View>

        <View style={styles.contenedorRadio}>
          <TextInput style={styles.radio}></TextInput>
          <Text>Retirar pedido gratis - Multiplaza Tegucigalpa</Text>
        </View>

        <View style={styles.contenedorSubTotal}>
          <Text style={styles.subTotal}>Sub-Total L1,500.00</Text>
          <View style={styles.hr}></View>
          <Text style={styles.subTotal}>Sub-Total L1,695.00</Text>
        </View>
        <Pressable style={styles.pressableComprar}>
          <Text>Comprar</Text>
        </Pressable>
      </View>

    </View>
  )
}