import React, {PropTypes} from 'react'
import {View, Image, ScrollView, Text, TouchableOpacity, Dimensions} from 'react-native'
import {Card, CardItem, } from 'native-base'
import cardTheme from '../Themes/cardTheme'
import styles from './Styles/ProfileCardStyles'
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
          <View style={{padding: 10, alignItems: 'center'}}>
            <Image source={require('../Images/profile.png')} style={{width:75, height: 75, resizeMode: 'cover', shadowColor: 'rgba(0,0,0,0.2)', shadowOpacity: 0.8, shadowRadius: 1, shadowOffset: {height: 1, width: 1}, alignSelf: 'center', marginBottom: 5}}/>
            <Text style={styles.title}>User Name</Text>
            <Text style={styles.subtitle}>Distribution Company</Text>
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
