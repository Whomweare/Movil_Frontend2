import React, { useState, useEffect } from 'react';
import { View, Text, Alert, FlatList, Image, ScrollView, Pressable, Linking } from 'react-native';
import api from '../Services/Api';
import { AsignaturaInterface } from '../Modelos/Asignatura';
import styles from '../Estilos/Asignatura';

export default function AsignaturaComponent() {


    const handlePress = () => {
        Linking.openURL('IHRI://Descripcion.tsx'); // Define una URL personalizada para la navegación
    };


    const [asignaturas, setAsignaturas] = useState([]);

    const getAsignatura = async () => {
        try {

            const response = await api.get('asignatura');
            setAsignaturas(response.data)

        } catch (error) {
            Alert.alert('Error', 'Ocurrio un error' + error)
        }
    }

    useEffect(() => {
        getAsignatura()
    }, []);

    return (
        <View style={styles.contenedorPrincipal}>

            

            <FlatList
                style={styles.scrollView} contentContainerStyle={{ flexGrow: 1 }}
                data={asignaturas}
                keyExtractor={(item: AsignaturaInterface) => item.idAsignatura.toString()}
                renderItem={({ item }) => (
                    <View>

                        <View style={styles.contenedorProductos}>
                            <View style={styles.productos}>
                                <Image
                                    source={{ uri: 'https://th.bing.com/th/id/OIP.qaclxvlJyugAiqShPYObSAAAAA?w=395&h=500&rs=1&pid=ImgDetMain' }}
                                    style={styles.imagen}

                                />
                                <Text>{`L. ${item.idAsignatura} ${item.nombre}`}</Text>
                            </View>

                            <View style={styles.productos}>
                                <Image
                                    source={{ uri: 'https://th.bing.com/th/id/OIP.qaclxvlJyugAiqShPYObSAAAAA?w=395&h=500&rs=1&pid=ImgDetMain' }}
                                    style={styles.imagen}
                                />
                                <Text>{`L. ${item.idAsignatura} ${item.nombre}`}</Text>
                            </View>
                        </View>
                    </View>
                )}
            >
            </FlatList>
        </View>
    );
}

