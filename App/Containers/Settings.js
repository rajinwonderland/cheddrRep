import React, { PropTypes } from 'react'
import { View, ScrollView, Text, LayoutAnimation, Keyboard, Platform, Dimensions} from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import Routes from '../Navigation/Routes'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import ProfileCard from '../Components/ProfileCard'
import SettingsStuff from '../Components/SettingsStuff'
import {Button} from 'react-native-elements'

// Styles
import styles from './Styles/SettingsStyle'

console.disableYellowBox = true;

var height = Dimensions.get('window').height;

class Settings extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight
    }
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this))
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this))

    // Configure nav button
    this.props.navigator.state.tapHamburger = () => {
      this.props.navigator.drawer.toggle()
    }
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow (e) {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize
    })
  }

  keyboardDidHide (e) {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: (height*1)
    })
  }

  render () {
    return (
      <View style={[styles.mainContainer]}>
        <ProfileCard/>
        <Text style={{alignSelf: 'flex-start', marginLeft: 12, marginBottom: 10, marginTop:10, color: '#424242', fontFamily: 'HelveticaNeue', fontSize: 16, fontWeight: "600"}}>Some other field</Text>
        <SettingsStuff style={{alignSelf: 'flex-start', marginLeft: 20, marginBottom: 10, marginTop:10, }}/>
        <Text style={{alignSelf: 'flex-start', marginLeft: 12, marginBottom: 10, color: '#424242', fontFamily: 'HelveticaNeue', fontSize: 16, fontWeight: "600"}}>Some other field</Text>
        <SettingsStuff style={{alignSelf: 'flex-start', marginLeft: 20, marginBottom: 10, marginTop:10, }}/>
        <Button raised title="Sign Out" backgroundColor="#2479BD"  onPress={() => this.props.navigator.push(Routes.LoginScreen)}/>
      </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(Settings)
