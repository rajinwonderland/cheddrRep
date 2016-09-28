import React, {Component} from 'react'
import {View, Image, ScrollView, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import {Card, CardItem, } from 'native-base'
import cardTheme from '../../Themes/cardTheme'
import { Images } from '../../Themes'
import BarChart from './BarChart'



var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


class CashEarned extends Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onTouch}>
      <Card theme={cardTheme} style={[styles.cardWrapper]}>
        <CardItem style={styles.cardItem}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Cash Earned</Text>
            <BarChart barStyle={{width: width*.3}} value={'$2561.00 Aug'}/>
            <BarChart barStyle={{width: width*.2, backgroundColor: '#cc0000'}} value={'$920.00 July'}/>
          </View>
          <View style={styles.imgWrap}>
            <Text style={[styles.title, {color: '#008650', fontWeight: "500", fontSize: 24}]}>$3481.00</Text>
          </View>
        </CardItem>
      </Card>
      </TouchableOpacity>
    )
  }
}

export default CashEarned


const styles = StyleSheet.create({
  cardWrapper: {
    flex:1,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 1,
    borderBottomColor: 'transparent',
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOpacity: 0.8,
    shadowRadius: 1,
    marginBottom: 10,
    width: width*.94,
    marginTop: 10,
  },
  cardItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width*.94,

  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: 'HelveticaNeue',
    color: '#555',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 11,
    color: '#757575',
    fontWeight: "500",
    fontFamily: 'HelveticaNeue'
  },
  textWrapper: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    width: width*.3,
    padding: 5,
  },
  imgWrap: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'flex-end'

  },

});
