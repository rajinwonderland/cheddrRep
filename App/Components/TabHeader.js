import React, {Component} from 'react'
import {View, Image, ScrollView, Text, TouchableOpacity, Dimensions} from 'react-native'
import {Card, CardItem, Button } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PlaceCard from './PlaceCard'



var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class TabHeader extends Component {
  render() {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: height*0.065, marginTop: 5, marginBottom: 5}}>
        <Text style={{marginTop: 10, marginLeft: 12, marginBottom: 10, color: '#757575'}}>{this.props.title}</Text>
        <Button transparent style={{}} onPress={this.props.onTouch}>
          <Icon name={this.props.iconName} style={{color:'#616161', alignSelf: 'center', marginTop: -5}} size={25}/>
        </Button>
        </View>
    )
  }
}

export default TabHeader
