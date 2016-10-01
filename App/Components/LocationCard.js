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
            <View style={{alignSelf: 'center', marginTop: 30}}>
            <Image source={{uri: 'https://geo1.ggpht.com/cbk?panoid=V-KCsgVvXggnr42QsNL-NQ&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=256&yaw=4.9596567&pitch=0'}} style={{height: 200, width: width*0.75, marginBottom: 10, alignSelf: 'center', resizeMode: 'cover',}}/>
            </View>
        <View style={[styles.cardItem, {borderTopWidth: 1, borderTopColor: '#f5f5f5', paddingTop: 10, justifyContent: 'center' }]}>
          <Text style={{color: '#B71C1C', fontSize: 24, fontWeight: "600", fontFamily: 'HelveticaNeue', }}>4</Text>
          <Text style={[styles.title, {marginTop: 3}]}>  applicable incentives</Text>
        </View>
      </Card>
      <View style={{position: 'absolute', top: 10, right: 24, backgroundColor: 'white'}}>
        <Icon name={this.props.iconName} size={55} color={'#2479BD'}/>
      </View>
      </TouchableOpacity>
    )
  }
}



export default LocationCard
