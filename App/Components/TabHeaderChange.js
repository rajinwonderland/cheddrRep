import React, {Component} from 'react'
import {View, Image, ScrollView, Text, TouchableOpacity, Dimensions} from 'react-native'
import {Card, CardItem, Button } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PlaceCard from './PlaceCard'
import Routes from '../Navigation/Routes'


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class TabPage extends Component {
  render(){
    return(
        <View>
          <ScrollView>
            <PlaceCard onTouch={this.props.onTap}/>
            <PlaceCard onTouch={this.props.onTap}/>
            <PlaceCard onTouch={this.props.onTap}/>
          </ScrollView>
        </View>
    )
  }
}

export default TabPage
