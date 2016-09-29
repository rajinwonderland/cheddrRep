import React, {Component} from 'react'
import { View, Image, Text, StyleSheet, Dimensions, Platform, TextInput } from 'react-native'
import { Card, ListItem, Button, Icon, } from 'react-native-elements'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


class IncentiveCard extends Component{
render() {
    return(
          <Card
            containerStyle={{ width: width*.94, alignSelf: 'center' }}
          >
            <Image source={this.props.itemPhoto} style={{ width: width*.94, height: 100, marginBottom: 15, alignSelf: 'center', resizeMode: 'cover', }}/>
            <Text style={{marginBottom: 0.5, fontFamily: 'HelveticaNeue', fontWeight: '600', }}>
              {this.props.itemTitle}
            </Text>
            <Text style={{ fontFamily: 'HelveticaNeue', fontWeight: '300', }}>
              {this.props.itemReward}
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Icon
                  raised
                  name='hashtag'
                  type='font-awesome'
                  color={this.props.iconColor}
                  containerStyle={this.props.containerStyle}
                  onPress={this.props.onPress}
              />
              <Icon
                  raised
                  name='camera'
                  type='font-awesome'
                  color='#B71C1C'
                  onPress={() => console.log('hello')} />
              </View>
          </Card>
    )
  }
}

export default IncentiveCard
