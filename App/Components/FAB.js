import React, {Component, PropTypes} from 'react'
import { StyleSheet, View } from 'react-native'
import { Content, Button } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'

class FAB extends Component {

  render() {
    return (
      <View style={{overflow: 'visible'}}>
      <Button style={[this.props.style, {backgroundColor: this.props.fabColor, width: 34, height: 34, borderRadius: 17, shadowColor: 'rgba(0,0,0,0.12)', shadowOpacity: 0.8, shadowBlur: 1, marginTop: 1, }]} onPress={this.props.touchPress}>
          <Icon name={this.props.iconName} color={this.props.iconColor} size={15} />
      </Button>
      </View>
    )
  }
}

export default FAB
