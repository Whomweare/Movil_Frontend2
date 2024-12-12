import React, { createContext, useState, ReactNode } from 'react';
import { View, Text, Image, Pressable, Alert } from 'react-native';
import { ProductosInterface } from '../Modelos/Productos'



interface CarritoContextProps {
  carrito: ProductosInterface[];
  agregarAlCarrito: (producto: ProductosInterface) => void;
 limpiarCarrito: ()=> void;
 sumarCantidad: (id:number)=> void;
 restarCantidad: (id:number)=> void;

}



export const CarritoContext = createContext<CarritoContextProps | undefined>(undefined);


export const CarritoProvider = ({ children }: { children: ReactNode }) => {
  const [carrito, setCarrito] = useState<ProductosInterface[]>([]);

  const agregarAlCarrito = (producto: ProductosInterface) => {
    setCarrito((prev) => [...prev, producto]); {
        
    }
    Alert.alert('Carrito', 'Producto agregado al carrito exitosamente.');
  };

  const limpiarCarrito = () =>{
    setCarrito([]);
  }

  const sumarCantidad = (id: number)=> {
    setCarrito((prev) => 
      prev.map((item) => (item.id_producto === id ? { ...item, cantidad: item.inventario + 1 } : item))
    );
  };

  const restarCantidad = (id: number)=> {
    setCarrito((prev) => 
      prev.map((item) => (item.id_producto === id ? { ...item, cantidad: Math.max(item.inventario -1, 1) } : item))
    );
  };

  

 

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, limpiarCarrito, sumarCantidad, restarCantidad }}>
      {children}
    </CarritoContext.Provider>
  );
};