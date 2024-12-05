import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contenedorPrincipal: {
        width: "100%",
        height: "100%",
     
    },
    scrollView: {
        width: "100%", // Ancho completo de la pantalla
        height: "100%", // Puedes ajustar la altura como desees
        backgroundColor: "blue",
    },
    categorias: {
        width: "100%",
        height: "100%",
        flexDirection: 'row',
        height: "100%",
       
    },
    productos: {
        width: "100%", // Ancho específico para cada producto
        height: "100%",
         
      backgroundColor: 'red'
    },
    
    texto: {
        width: '100%', // Asegura que el texto ocupe todo el ancho de su contenedor
        height: "100%",
        textAlign: 'center',
        backgroundColor: 'lightcoral', // Para visibilidad durante la prueba
    }
});

export default styles;