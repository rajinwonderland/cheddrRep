import React, {Component} from 'react'
import {View, Image, ScrollView, Text, TouchableOpacity, Dimensions, ListView} from 'react-native'
import {Card, CardItem, Button } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PlaceCard from './PlaceCard'
import TabHeader from './TabHeader'
import TabPage from './TabPage'
import NearbyCards from './NearbyCards'


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


class NearbyTab extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggle: false,
    }
  }

  nearbyLocations() {
  fetch('http://api.v3.factual.com/t/places?geo={"$circle":{"$center":[34.06021,-118.41828],"$meters": 5000}}&limit=20&select=factual_id,name,address,category_labels&sort=$distance&KEY=XfbFf3mLgCO5GsBeQWvbaD0YM7VACh9qqvxjAjUo&q=filters={"category_labels":{"$includes_any":[bars, airports]}}')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
  })
  .catch((error) => {
    console.error(error);
  })
}

  render(){
    return (
      <View style={{flex:1, width: width*1, marginTop: 10, height: height*1, }}>
          <TabPage>
            {this.props.children}
          </TabPage>
      </View>
    )
  }
}

export default NearbyTab
