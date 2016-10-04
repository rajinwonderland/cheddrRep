import {Dimensions, Platform} from 'react-native'
var width = Dimensions.get('window').width;

export default {
  cardWrapper: {
    flex:1,
    flexDirection: 'row',
    borderColor: 'transparent',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 1,
    backgroundColor: (Platform.OS === 'ios' ) ? "transparent" : "#fff",
    borderBottomColor: 'transparent',
    width: width*.8,
    marginBottom: 25,
  },
  cardItem: {
    flex:2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: 'center',
    borderBottomColor: 'transparent',

  },
  anotherItem: {
    flex:3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: 'center',
    borderBottomColor: 'transparent',

  },
  title: {
    fontSize: 14,
    fontFamily: 'HelveticaNeue',
    fontWeight: "600",
    color: '#424242',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'HelveticaNeue',
    fontSize: 14,
    fontWeight: "400",
    color: '#555'
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
  ListWrapper: {
    flex: 1,
    position: 'absolute',
    right: 5,
    top: -5,
    borderColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    width: width*.35,
    alignItems: 'center',
    backgroundColor: 'transparent',
    shadowColor: 'rgba(0,0,0,0.12)',
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: -3,
    },
  },
  ListItem: {
    flex: 2,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    height: 45,
  },

}
