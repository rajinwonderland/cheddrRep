import React, {Component} from 'react'
import {View, Image, ScrollView, Text, TouchableOpacity, Dimensions} from 'react-native'
import {Card, CardItem, Thumbnail, Button} from 'native-base'
import styles from './Styles/FilterControlStyles'
import { Images } from '../Themes'
import cardTheme from '../Themes/cardTheme'


var width = Dimensions.get('window').width;


class FilterControl extends React.Component {

  render () {
    return (
      <View style={{backgroundColor: 'transparent'}}>
      <Card theme={cardTheme} style={[styles.cardWrapper]}>
          <CardItem style={styles.cardItem}>
            <Button block textStyle={styles.title} style={styles.button}>Distance</Button>
            <Button block textStyle={styles.title} style={styles.button}>Category</Button>
            <Button block textStyle={styles.title} style={styles.button}>Saved</Button>
          </CardItem>
      </Card>
      </View>
    )
  }
}

export default FilterControl
