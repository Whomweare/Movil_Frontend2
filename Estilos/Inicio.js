import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },

  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Sombra para Android
  },

  imagen: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: '#e0e0e0', // Fondo por si la imagen no carga
  },

  texto: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    flexShrink: 1, // Evita que el texto desborde el contenedor
  },
});
