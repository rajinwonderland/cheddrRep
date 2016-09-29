import React, {PropTypes} from 'react'
import {View, Image, ScrollView, Text, TouchableOpacity, Dimensions} from 'react-native'
import { Card } from 'react-native-elements'
import cardTheme from '../Themes/cardTheme'
import styles from './Styles/PlaceCardStyle'
import Routes from '../Navigation/Routes'
import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/MaterialIcons'

var width = Dimensions.get('window').width;


class LocationCard extends React.Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
      <Card containerStyle={{width: width*.94, marginTop: 0 , alignItems: 'center'}}>
            <Text style={styles.title}>{this.props.name}</Text>
            <Text style={styles.subtitle}>{this.props.address}</Text>
            <View style={{padding: 10, alignSelf: 'center'}}>
            <Icon name={this.props.iconName} size={60} color={'#2479BD'}/>
            </View>
        <View style={[styles.cardItem, {borderTopWidth: 1, borderTopColor: '#f5f5f5', paddingTop: 10, justifyContent: 'center' }]}>
          <Text style={{color: '#B71C1C', fontSize: 24, fontWeight: "600", fontFamily: 'HelveticaNeue', }}>4</Text>
          <Text style={[styles.title, {marginTop: 3}]}>  applicable incentives</Text>
        </View>
      </Card>
      </TouchableOpacity>
    )
  }
}



export default LocationCard
