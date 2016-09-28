import React, {Component} from 'react'
import {View, Image, ScrollView, Text, TouchableOpacity, Dimensions} from 'react-native'
import {Card, CardItem, Button } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import NearbyCards from './NearbyCards'
import TabHeader from './TabHeader'
import TabPage from './TabPage'


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class RecentTab extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggle: false,
    }
  }
  render(){
    return (
      <View style={{flex:1, width: width*1, height: height*1, marginTop: 10 }}>
          <TabPage>
            <NearbyCards/>
          </TabPage>
      </View>
    )
  }
}

export default RecentTab
