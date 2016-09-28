import React, {PropTypes} from 'react'
import {View, Image, ScrollView, Text, TouchableOpacity, Dimensions} from 'react-native'
import {Card, CardItem, Button } from 'native-base'
import cardTheme from '../Themes/cardTheme'
import styles from './Styles/SettingsStuffStyles'
import Routes from '../Navigation/Routes'
import { Images } from '../Themes'
import {Icon, FormLabel, FormInput} from 'react-native-elements'
import CheddrInput from './CheddrInput'

var width = Dimensions.get('window').width;


class SettingsStuff extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      edit: false,
    }
  }

  render () {
    return (
      <View style={this.props.style}>
      <TouchableOpacity onPress={this.props.onPress}>
            <Text style={styles.title}>Email: user@cheddr.com</Text>
            <Text style={styles.title}>First Name: Matt</Text>
            <Text style={styles.title}>Last Name: Zimmer</Text>
            <Text style={styles.title}>Distributor: Cheddr</Text>
      </TouchableOpacity>
      </View>


    )
  }
}



export default SettingsStuff
