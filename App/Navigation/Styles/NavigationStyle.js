import {StyleSheet, Dimensions, Platform} from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes/'

var width = Dimensions.get('window').width;

const NavigationStyle = StyleSheet.create({
  titleWrapper: {
    flex: 1,
    width: width*.75,
    marginBottom: (Platform.OS === 'ios' ) ? 1 : 25,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  navTitle: {
    color: Colors.snow,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.bold,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    textAlign: 'left',
  },
  navSubtitle: {
    flex: 1,
    color: Colors.snow,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.base,
    alignSelf: 'center'
  },
  navButtonText: {
    color: Colors.snow,
    marginTop: (Platform.OS === 'ios' ) ? 8 : 0,
    marginLeft: 0,
    fontFamily: Fonts.bold,
    padding: Metrics.baseMargin,
  },
  navButtonLeft: {
    margin: Metrics.otherMargin,
    marginTop: (Platform.OS === 'ios' ) ? Metrics.otherMargin : 0,
  },
  navButtonCheddr: {
    margin: Metrics.otherMargin,
    resizeMode: 'contain',
    width: (Platform.OS === 'ios' ) ? 24 : 20,
    height: (Platform.OS === 'ios' ) ? 27 : 20,
    marginTop: (Platform.OS === 'ios' ) ? 7 : 0,
  },
  navButtonRight: {
    margin: Metrics.otherMargin,
  },
  navigationBar: {
    backgroundColor: '#FFB829',
    height: Metrics.navBarHeight,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowRadius: 2,
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  }
})

export default NavigationStyle
