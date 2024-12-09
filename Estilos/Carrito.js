import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 8,
  },
  imagen: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  texto: {
    fontSize: 16,
    flex: 1,
  },
  totalContenedor: {
    marginVertical: 16,
    alignItems: 'center',
  },
  totalTexto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  boton: {
    backgroundColor: '#007BFF',
    padding: 12,
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 8,
  },
  botonComprar: {
    backgroundColor: '#28A745',
    padding: 12,
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 8,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cantidadControles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  
  botonCantidad: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  
  textoCantidad: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  botonEliminar: {
    marginTop: 10,
    backgroundColor: '#ff4d4d',
    padding: 5,
    borderRadius: 5,
  },
  
  textoEliminar: {
    color: '#fff',
    fontWeight: 'bold',
  },

});