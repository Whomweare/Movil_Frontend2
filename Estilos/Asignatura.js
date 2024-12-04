import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contenedorPrincipal: {
        width: "100%",
        height: "100%"
      },
  
    flat: {
      width: "100%",
      height: "100%"
    },
  
    input: {
    
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
  
    card: {
      backgroundColor: '#fff',
      padding: 16,
      marginBottom: 8,
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      marginTop: 5
    },

    
  imagen: {
    width: 200,
    height: 200,
  },

  scrollView: {
    width: "100%",
    height: "100%",
  
  },

  contenedorBotonCategorias: {
    width: "100%",
    height: 60,

    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  botonCategorias: {
    width: "40%",
    height: "60%",
    backgroundColor: "gray",
    borderRadius: 20,
    alignItems: "center",
    alignSelf: "flex-end",
    marginEnd: 10
    },
  
    contenedorProductos: {
      width: "100%",
      height: 300, // Fija la altura del contenedor de cada producto
    
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
      flexDirection: 'row',
     
    },

    productos: {
    width: "50%",
    margin: 10
    }
  

  });

export default styles;