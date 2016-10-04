import React from 'react'
import { TouchableOpacity, Text, Image, Dimensions } from 'react-native'
import styles from './Styles/NavigationStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors, Metrics, Images } from '../Themes'

// I18n
import I18n from '../I18n/I18n.js'
var width = Dimensions.get('window').width;

export default {

  backButton (onPressFunction) {
    return (
      <TouchableOpacity onPress={onPressFunction}>
        <Icon name='arrow-back'
          size={Metrics.icons.small}
          color={Colors.snow}
          style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    )
  },

  hamburgerButton (onPressFunction) {
    return (
      <TouchableOpacity onPress={onPressFunction}>
        <Icon name='menu'
          size={Metrics.icons.small}
          color={Colors.snow}
          style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    )
  },

  forgotPasswordButton (onPressFunction) {
    return (
      <TouchableOpacity onPress={onPressFunction}>
        <Text style={styles.navButtonText}>{I18n.t('forgotPassword')}</Text>
      </TouchableOpacity>
    )
  },
  searchButton (onPressFunction) {
    return(
      <TouchableOpacity onPress={onPressFunction}>
        <Icon name='search'
          size={Metrics.icons.small}
          color={Colors.snow}
          style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    )
  }

}
