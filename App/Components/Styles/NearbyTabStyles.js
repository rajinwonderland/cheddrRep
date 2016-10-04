import {Dimensions} from 'react-native'
var width = Dimensions.get('window').width;

export default {
  cardWrapper: {
    flex:1,
    borderColor: 'transparent',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    borderRadius: 1,
    borderBottomColor: 'transparent',
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    marginBottom: 10,
    width: width*.94,
  },
  cardItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width*.94,
    borderBottomColor: 'transparent'
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: '#555',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 11,
    color: '#757575'
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
