import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contenedorPrincipal: {
    width: "100%",
    height: "100%",
  },

  imagen: {
    width: "100%",
    height: "70%",
    marginBottom: "2%"
  },

  texto: {
    width: "100%",
    height: "3.33%",
    paddingLeft: "2%"
  },

  pressable: {
    width: '40%',
    height: 40,

    borderRadius: 50,
    alignSelf: 'flex-end',
    marginTop: 40,
    marginRight: 10,
    backgroundColor: '#28A745',

    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '1%',

  },

});

export default styles;