import React, {Component} from 'react'
import {View, Image, ScrollView, Text, TouchableOpacity, Dimensions} from 'react-native'
import {Card, CardItem, Button } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PlaceCard from './PlaceCard'


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class TabPage extends Component {
  render(){
    return (
        <ScrollView>
          <View style={[{flex: 1, width: width*1, marginBottom: 200}, this.props.style]}>
            {this.props.children}
          </View>
        </ScrollView>
    )
  }
}

export default TabPage
