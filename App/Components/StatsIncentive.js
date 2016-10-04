import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import { PricingCard, Card } from 'react-native-elements'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class StatsIncentive extends Component {
  render(){
    return(
        <View>
        <Card
          title='CASH EARNED'
          containerStyle={{color: '#424242', width: width*.94, alignSelf: 'center'}}>
          <Text style={{alignSelf: 'center', color: '#008650', fontFamily: 'Helvetica', fontWeight: '600', fontSize: 28, marginBottom: 10}}>
            $3,481
          </Text>
        </Card>
        <Card
          title='INCENTIVES INCOMPLETE'
          containerStyle={{color: '#B71C1C', width: width*.94, alignSelf: 'center'}}>
          <Text style={{alignSelf: 'center', color: '#B71C1C', fontFamily: 'Helvetica', fontWeight: '600', fontSize: 28, marginBottom: 10}}>
            15
          </Text>
        </Card>
        <Card
          title='INCENTIVES COMPLETE'
          containerStyle={{color: '#424242', width: width*.94, alignSelf: 'center'}}>
          <Text style={{alignSelf: 'center', color: '#2749bd', fontFamily: 'Helvetica', fontWeight: '600', fontSize: 28, marginBottom: 10}}>
            45
          </Text>
        </Card>
      </View>
    )
  }
}

export default StatsIncentive
