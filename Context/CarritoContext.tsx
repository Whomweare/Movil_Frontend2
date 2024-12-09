import React, { createContext, useState, ReactNode } from 'react';
import { View, Text, Image, Pressable, Alert } from 'react-native';
import { ProductosInterface } from '../Modelos/Productos'



interface CarritoContextProps {
  carrito: ProductosInterface[];
  agregarAlCarrito: (producto: ProductosInterface) => void;
}

export const CarritoContext = createContext<CarritoContextProps | undefined>(undefined);

export const CarritoProvider = ({ children }: { children: ReactNode }) => {
  const [carrito, setCarrito] = useState<ProductosInterface[]>([]);

  const agregarAlCarrito = (producto: ProductosInterface) => {
    setCarrito((prev) => [...prev, producto]);
    Alert.alert('Carrito', 'Producto agregado al carrito exitosamente.');
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};