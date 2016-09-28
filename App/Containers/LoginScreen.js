import React, {PropTypes} from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation,
  Alert,
  Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyle'
import Actions from '../Actions/Creators'
import {Images, Metrics} from '../Themes'
import { Button, FormLabel, FormInput } from 'react-native-elements'


// I18n
import I18n from '../I18n/I18n.js'
var height = Dimensions.get('window').height;


class LoginScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      username: 'mzimmer@cheddr.com',
      password: 'password',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth }
    }
    this.isAttempting = false
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    if (this.isAttempting && !newProps.attempting) {
      this.props.navigator.pop()
    }
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)

    // Configure the right nav button
    this.props.navigator.state.tapForgotPassword = this.tapForgotPassword
  }

  // Method that runs when you tap the right nav bar button
  tapForgotPassword = () => {
    Alert.alert(I18n.t('forgotPassword'))
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: {width: 100, height: 70}
    })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: {width: Metrics.screenWidth}
    })
  }

  handlePressLogin = () => {
    const { username, password } = this.state
    const { dispatch } = this.props
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    dispatch(Actions.attemptLogin(username, password))
  }

  handlePressCancel = () => {
    const { navigator } = this.props
    navigator.pop()
  }

  handleChangeUsername = (text) => {
    this.setState({ username: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  render () {
    const { username, password } = this.state
    const { attempting } = this.props
    const editable = !attempting
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly
    return (
      <ScrollView contentContainerStyle={{justifyContent: 'center',}} style={[Styles.container, {height: this.state.visibleHeight}]}>
        <Image source={require('../Images/Cheddr-BELOW-Green.png')} style={[Styles.topLogo, this.state.topLogo]} />
        <View style={Styles.form}>
          <View style={Styles.row}>
            <FormLabel style={Styles.rowLabel}>{I18n.t('username')}</FormLabel>
            <FormInput
              ref='username'
              style={textInputStyle}
              value={username}
              editable={editable}
              keyboardType='default'
              returnKeyType='search'
              onChangeText={this.handleChangeUsername}
              underlineColorAndroid='transparent'
              placeholder={I18n.t('username')} />
          </View>

          <View style={Styles.row}>
            <FormLabel style={Styles.rowLabel}>{I18n.t('password')}</FormLabel>
            <FormInput
              ref='password'
              style={textInputStyle}
              value={password}
              editable={editable}
              keyboardType='default'
              returnKeyType='search'
              secureTextEntry
              onChangeText={this.handleChangePassword}
              underlineColorAndroid='transparent'
              placeholder={I18n.t('password')} />
          </View>
            <Button
              raised
              small
              title="Sign In"
              onPress={this.handlePressLogin}
              backgroundColor="#2479BD"
              />
            <Text style={{alignSelf: 'center', marginTop: 5, marginBottom: 5}}>- or -</Text>
            <Button
              raised
              small
              title="Cancel"
              onPress={this.handlePressCancel}
              backgroundColor="#008650"/>

        </View>

      </ScrollView>
    )
  }

}

LoginScreen.propTypes = {
  dispatch: PropTypes.func,
  navigator: PropTypes.object,
  attempting: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    attempting: state.login.attempting
  }
}

export default connect(mapStateToProps)(LoginScreen)
