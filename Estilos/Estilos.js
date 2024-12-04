
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contenedorPrincipal: {
    width: "100%",
    height: "100%",
    backgroundColor: ''
  },

  menu: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
  },

  contenedorIconos: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#afafaf",
  },

  contenedorIconosSinBorde: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  contenedorContenido: {
  width: "100%",
  height: "85%",
  },

  scrollView: {
    width: "100%",
    height: "100%",
  },

  contenedorBotonCategorias: {
    width: "100%",
    height: 80,

    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  botonCategorias: {
  width: "40%",
  height: "50%",
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
  },

  imagen: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },


  
  text: {
    fontSize: 16,
    color: "white",
  },

  textoTitulo: {
    fontSize: 20,
    fontWeight: '900',
  },

  viewMother: {
    width: "100%",
    height: "100%"
  },

  viewHija: {
    width: "100%",
    height: "10%",
    fontWeight: 900
  },

  productos: {
  width: "100%",
  height: "25%",
  backgroundColor: "red"
  },
  izquierda: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  centro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  derecha: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  icono: {
    marginRight: 10,
  },

  vistaLateral: {
    top: 0,
    right: 0,
    width: "100%", // Puedes ajustar el ancho
    height: '100%',
    backgroundColor: '#f5f5f5',
    borderLeftWidth: 1,
    borderColor: '#afafaf',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoLateral: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default styles;