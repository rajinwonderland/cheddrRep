import {Dimensions} from 'react-native'
var width = Dimensions.get('window').width;

export default {
  cardWrapper: {
    flex:1,
    borderColor: 'transparent',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    borderRadius: 1,
    backgroundColor: '#277abc',
    borderBottomColor: 'transparent',
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: width*1,
    height: 120,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    marginBottom: 10,
    zIndex: 0,
  },
  cardItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width*.94,
    borderBottomColor: 'transparent',
  },
  title: {
    fontSize: 14,
    fontFamily: 'HelveticaNeue',
    fontWeight: "600",
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: 'HelveticaNeue',
    fontSize: 11,
    color: '#fff'
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
    zIndex: 1,
  },
  ListItem: {
    flex: 2,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    height: 45,
  },

}
