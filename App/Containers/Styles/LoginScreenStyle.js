import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../Themes/Colors'

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    paddingTop: 70,
    backgroundColor: 'transparent'
  },
  form: {
    backgroundColor: 'transparent',
    margin: 10,
    borderRadius: 4
  },
  row: {
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  rowLabel: {
    color: Colors.charcoal
  },
  textInput: {
    height: 40,
    color: Colors.coal
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel
  },
  loginRow: {
    flexDirection: 'row',
    width: width*.8
  },
  loginButtonWrapper: {
    flex: 1
  },
  loginButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.charcoal,
    backgroundColor: Colors.panther,
    padding: 6
  },
  loginText: {
    textAlign: 'center',
    color: Colors.silver
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: 100,
    height: 112,
    marginTop: 48,
  }
})
