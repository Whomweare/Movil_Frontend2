import { FlatList, Pressable, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  flatList: {
    width: '100%',
  },
  productos: {
    backgroundColor: '#ffffff',
    marginVertical: 8,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  imagen: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
    resizeMode: 'cover',
  },
  texto: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

export default styles;