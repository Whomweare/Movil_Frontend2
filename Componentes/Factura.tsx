import { View, Text } from 'react-native'
import React from 'react'
import styles from '../Estilos/Factura';

export default function FacturaComponent({route}) {
  const { elemento } = route.params;
  return (
    <View style={styles.contenedorPrincipal}>
    <View style={styles.header}>
      <Text style={styles.headerContent}>Producto
        </Text>
      <Text style={styles.headerContent}>Precio</Text>
      <Text style={styles.headerContent}>Cantidad</Text>
      <Text style={styles.headerContent}>Subtotal</Text>
      <Text style={styles.headerContent}>Total</Text>
    </View>
    <View style={styles.header}>
      <Text style={styles.headerContent}>{elemento.nombre}</Text>
      <Text style={styles.headerContent}>{elemento.inventario}</Text>
      <Text style={styles.headerContent}>{elemento.precio}</Text>
      <Text style={styles.headerContent}>{elemento.precio * elemento.cantidad}</Text>
    </View>
    </View>
  )
}