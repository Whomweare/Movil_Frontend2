import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contenedorPrincipal: {
    width: "100%",
    height: "100%",
  },

  help: {
    width: "100%",
    height: '30%',
    flexDirection: 'row',
  },

  contenedorPrimera: {
    width: "40%",
    height: "100%",
  },

  contenedorSegunda: {
    width: "40%",
    height: "100%",
    paddingLeft: '3%',
  },

  contenedorTercera: {
    width: '100%',
    height: '70%',
    paddingLeft: '2%',
    paddingTop: '62%',
  },

  contenedorBotones: {
    width: "100%",
    height: "20%",
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: '30%',
    backgroundColor: '#afafaf',
  },

  pressable: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },

  textPressable: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    paddingTop: 12,
  },

  textInput: {
    width: '40%',
    height: '100%',
    textAlign: 'center'
  },

  textoPrecio: {
    width: '50%',
    height: '100%',
    paddingLeft: '2%',
    paddingTop: 12,
    backgroundColor: '#afafaf'
  },

  imagen: {
    width: '100%',
    height: "100%"
  },

  texto: {
    width: '100%',
    height: "20%",
  },

  pressableComprar: {
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

  contenedorRadio: {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    paddingTop: '4%',
  },

  radio: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    marginRight: '2%',
    marginTop: '-0.5%'
  },

  active: {
    width: "6%",
    height: "90%",
    borderRadius: 50,
    backgroundColor: 'gray'
  },

  deactive: {
    width: "6%",
    height: "90%",
    borderRadius: 50,
     backgroundColor: 'gray'
  },

  subTotal: {
    alignSelf: 'flex-end'
  },
  contenedorSubTotal: {
    width: "100%",
    marginTop: '4%',
    paddingRight: "4%"
  },

  hr: {
    borderWidth: 1,
    borderColor: '#afafaf'
  }
});

export default styles;