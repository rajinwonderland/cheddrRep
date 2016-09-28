import React, {Component} from 'react'
import { View, Image, Text, StyleSheet, Dimensions, Platform, TextInput } from 'react-native'
import { Card, ListItem, Button, Icon, } from 'react-native-elements'
import Overlay from './Overlay'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


class IncentiveCard extends Component{
  render() {
    return(
        <View>
          <Card
            containerStyle={{ width: width*.94, alignSelf: 'center' }}
          >
            <Image source={require('../Images/vitaCoco.png')} style={{ width: width*.94, height: 100, marginBottom: 15, alignSelf: 'center', resizeMode: 'cover', }} />
            <Text style={{marginBottom: 10, fontFamily: 'HelveticaNeue', fontWeight: '600', }}>
              Delicious IPA, 6pk, 12oz
            </Text>
            <Text style={{marginBottom: 10, fontFamily: 'HelveticaNeue', fontWeight: '300', }}>
              $1.00 / Case (1-50)
            </Text>
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, right: 0 }} >
              <Icon
                  raised
                  name='hashtag'
                  type='font-awesome'
                  color='#2479BD'
                  onPress={() => console.log('hello')} />
              <Icon
                  raised
                  name='camera'
                  type='font-awesome'
                  color='#B71C1C'
                  onPress={() => console.log('hello')} />
              </View>
          </Card>
          <Overlay/>
        </View>

    )
  }
}

export default IncentiveCard
