import React, {PropTypes} from 'react'
import {View, Image, ScrollView, Text, TouchableOpacity, Dimensions} from 'react-native'
import {Card, CardItem, } from 'native-base'
import cardTheme from '../Themes/cardTheme'
import styles from './Styles/PlaceCardStyle'
import Routes from '../Navigation/Routes'
import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/MaterialIcons'

var width = Dimensions.get('window').width;


class PlaceCard extends React.Component {

  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
      <Card theme={cardTheme} style={[styles.cardWrapper]}>
        <CardItem style={styles.cardItem}>
          <View style={{padding: 10,}}>
            <Text style={styles.title}>{this.props.name}</Text>
            <Text style={styles.subtitle}>{this.props.address}</Text>
          </View>
          <View style={styles.imgWrap}>
            <Icon name={this.props.iconName} size={60} color={'#fdb729'}/>
          </View>
        </CardItem>
      </Card>
      </TouchableOpacity>
    )
  }
}

PlaceCard.propTypes = {
  onPushRoute: PropTypes.func.isRequired
}


export default PlaceCard
