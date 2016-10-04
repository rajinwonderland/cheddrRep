import React, {Component} from 'react'
import {View, ScrollView, Text, Image, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import {Card, Button, SocialIcon, Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper'
import CashEarned from './RepStats/CashEarned'
import Qualifier from './RepStats/Qualifier'
import StatsIncentive from '../Components/StatsIncentive'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: width*1,
    marginTop: 10,
  },
  slide2: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width*1,
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  slide3: {
    flex: 1,
    marginTop: 10,
    width: width*1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#424242',
    fontSize: 18,
    fontFamily: 'Helvetica',
    marginLeft: 12,
    fontWeight: '100'
  },
  title: {
    fontSize: 36,
    fontFamily: 'Helvetica',
    fontWeight: '300',
    color: '#f93666',
    alignSelf: 'flex-start',
    marginBottom: 0,
    marginLeft: 12,
  },
  card: {
    position: 'absolute',
    flex: 1,
    bottom: 5,
    right: 0,
    left: 0,
    textAlign: 'left',
  }
})

class StatsSlider extends Component {
   render(){
      return(
           <Swiper style={styles.wrapper} infinite={false} showsButtons={false} dot={<Icon name='circle'  type='font-awesome' color='rgba(0,0,0,0.5)' containerStyle={{marginBottom: 30}}/>} activeDot={<Icon name='circle' type='font-awesome' color='#008650' containerStyle={{marginBottom: 30}}/>} >
             <View style={styles.slide1}>
              <Text style={{fontFamily: 'HelveticaNeue', fontWeight: '600', textAlign: 'center', color: '#424242', }}>This Month</Text>
              <StatsIncentive/>
             </View>
             <View style={styles.slide2}>
             <Text style={{fontFamily: 'HelveticaNeue', fontWeight: '600', alignSelf: 'center', textAlign: 'center', color: '#424242', }}>Last Month</Text>
             <StatsIncentive/>
             </View>
             <View style={styles.slide3}>
             <Text style={{fontFamily: 'HelveticaNeue', fontWeight: '600', alignSelf: 'center', textAlign: 'center', color: '#424242', }}>Career</Text>
             <StatsIncentive/>
             </View>
          </Swiper>
      )
   }
}

export default StatsSlider
