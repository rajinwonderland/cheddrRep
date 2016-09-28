import React, {PropTypes} from 'react'
import {View, Image, ScrollView, Text, TouchableOpacity, Dimensions, Platform} from 'react-native'
import {Card, CardItem, } from 'native-base'
import cardTheme from '../Themes/cardTheme'
import styles from './Styles/PlaceInfoStyles'
import android from './Styles/PlaceInfoAndroid'
import Routes from '../Navigation/Routes'
import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/MaterialIcons'

var width = Dimensions.get('window').width;


class PlaceInfo extends React.Component {

  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
      <Card theme={cardTheme} style={(Platform.OS === 'ios' ) ? styles.cardWrapper : android.cardWrapper}>
        <CardItem style={styles.cardItem}>
          <View style={{padding: 10,}}>
            <Text style={styles.title}>{this.props.name}</Text>
            <Text style={styles.subtitle}>{this.props.address}</Text>
          </View>
          <View style={styles.imgWrap}>
            <Icon name={this.props.iconName} size={60} color={'#fff'}/>
          </View>
        </CardItem>
      </Card>
      </TouchableOpacity>
    )
  }
}

PlaceInfo.propTypes = {
  onPushRoute: PropTypes.func.isRequired
}


export default PlaceInfo
