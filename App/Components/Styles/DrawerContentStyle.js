import {Dimensions, Platform} from 'react-native'
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default {
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',

  },
  imgHeader: {
    flex: 2,
    height: height*.25,
    top: 0,
    overflow: 'hidden'
  },
  logo: {
    alignSelf: 'flex-start',
    width: 65,
    height: 65,
    resizeMode: 'cover',
    marginTop: 0,
    position: 'absolute',
    top: (Platform.OS === 'ios' ) ? 50 : 58,
    marginLeft: 15,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOpacity: 0.8,
    shadowRadius: 0.5,
    shadowOffset: {
      height: 1,
      width: 1.5,
    }
  },
  email: {
    color: '#fff',
    marginLeft: 85,
    fontSize: (Platform.OS === 'ios' ) ? 12 : 14,
    fontFamily: 'HelveticaNeue',
    fontWeight: "500"
  },
  name: {
    color: '#fff',
    marginTop: 65,
    marginLeft: 85,
    fontWeight: 'bold',
    fontSize: (Platform.OS === 'ios' ) ? 16 : 20,
    fontFamily: 'HelveticaNeue',
  },

}
