import {Dimensions} from 'react-native'
var width = Dimensions.get('window').width;

export default {
  cardWrapper: {
    flex:1,
    borderColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 1,
    borderBottomColor: 'transparent',
    marginBottom: 10,
    width: width*.94,
    padding: 0,
    backgroundColor: 'transparent',
  },
  cardItem: {
    padding: 0,
    borderBottomColor: 'transparent',
  },
  title: {
    fontSize: 14,
    fontFamily: 'HelveticaNeue',
    fontWeight: "600",
    color: '#fff',
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'HelveticaNeue',
    color: '#fff',
  },
  button: {
    marginBottom: 5,
    borderRadius: 1,
  },
  textWrapper: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  imgWrap: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',

  },


}
