import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  button: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  }
})
