import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import drawerStyles from './Styles/DrawerButtonStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'

class DrawerButton extends Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={{marginBottom: 5, marginTop: 5}}>
        <View style={ drawerStyles.menuWrapper }>
          <View style={drawerStyles.menuItem}>
            <Image source={this.props.img} style={{resizeMode: 'contain', width: 50, height: 50}}/>
            <View style={drawerStyles.titleWrap}>
              <Text style={this.props.textStyles}>{this.props.text}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

DrawerButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default DrawerButton
