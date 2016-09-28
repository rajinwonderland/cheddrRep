import React, {Component} from 'react'
import {View, Image, ScrollView, Text, TouchableOpacity, Dimensions} from 'react-native'
import {List, ListItem, Thumbnail, Button} from 'native-base'
import styles from './Styles/NearbyTabStyles'
import { Images } from '../Themes'
import cardTheme from '../Themes/cardTheme'

var width = Dimensions.get('window').width;


class RecentSubMenu extends React.Component {

  render () {
    return (
      <View style={{backgroundColor: 'transparent'}}>
      <List theme={cardTheme} style={[styles.ListWrapper]}>
          <ListItem style={styles.ListItem}>
              <Text style={{color: '#424242'}}>Distance</Text>
          </ListItem>

          <ListItem style={styles.ListItem}>
                <Text style={{color: '#424242'}}>Incentives</Text>
          </ListItem>
      </List>
      </View>
    )
  }
}

export default RecentSubMenu
