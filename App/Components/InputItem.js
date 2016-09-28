import React, {Component} from 'react'
import {View} from 'react-native'
import {FormLabel, FormInput} from 'react-native-elements'


class InputItem extends Component {
  render(){
    return(
      <View>
      <FormLabel style={{}}>Units Sold</FormLabel>
      <FormInput/>
      </View>
    )
  }
}

export default InputItem
