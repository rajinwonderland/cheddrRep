import {StyleSheet, Dimensions} from 'react-native'
import {Fonts, Metrics, Colors} from '../../Themes/'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

// For some reason this doesn't want to be a stylesheet
export const drawerStyles = {
  drawer: {
    backgroundColor: 'rgba(0,0,0,0.65)',
    position: 'absolute',
    top: 0,
    right: 25,
    left: 25,
    bottom: 0,
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
    

  }
}

const RootStyle = StyleSheet.create({
  applicationView: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.base,
    margin: Metrics.baseMargin
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }

})

export default RootStyle
