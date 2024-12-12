import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  item: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  imagen: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 10,
  },
  texto: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    textAlign: 'center'
  },
  botonesCantidad: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  botonCantidad: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  textoBoton: {
    fontSize: 18,
    color: '#000',
  },
  totalContenedor: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    marginTop: 15,
  },
  totalTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  botonComprar: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  textoBotonComprar: {
    fontSize: 18,
    color: '#fff',
  },
});
