import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
  },
  imagen: {
    width: 70,
    height: 70,
    marginRight: 15,
    borderRadius: 5,
  },
  infoProducto: {
    flex: 1,
  },
  texto: {
    fontSize: 16,
    marginBottom: 5,
  },
  botonesCantidad: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botonCantidad: {
    backgroundColor: '#007bff',
    padding: 5,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
  },
  totalContenedor: {
    paddingVertical: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  totalTexto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  boton: {
    backgroundColor: '#28a745',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  botonComprar: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
