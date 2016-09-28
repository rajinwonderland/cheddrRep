import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import drawerStyles from './Styles/DrawerButtonStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'

class TextButton extends Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
              <Text style={this.props.textStyles}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}



export default TextButton
