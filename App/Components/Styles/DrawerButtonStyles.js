import { Metrics, Colors, Fonts } from '../../Themes'
import {Dimensions} from 'react-native'
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default {
  text: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 12,
    fontFamily: 'HelveticaNeue',
  },
  linkText: {
    fontSize: 18,
    color: '#277abc',
    marginVertical: 12,
    fontFamily: 'HelveticaNeue',
  },
  menuWrapper: {
    flex:1,
    borderColor: 'transparent',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    borderRadius: 1,
    borderBottomColor: 'transparent',
    marginBottom: 10,
    zIndex: 0,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width*.55,
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
  titleWrap: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginLeft: 25,

  },
}
