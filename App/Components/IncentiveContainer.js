import React, {Component} from 'react'
import { View, Image, Text, StyleSheet, Dimensions, Platform, TextInput, TouchableOpacity} from 'react-native'
import { Card, ListItem, Button, Icon, } from 'react-native-elements'
import Overlay from './Overlay'
import IncentiveCard from './IncentiveCard'
import Modal from 'react-native-modalbox'
import ItemQuickView from './ItemQuickView'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var window = Dimensions.get('window');

class IncentiveContainer extends Component{
  constructor(props) {
    super(props)

    this.state = {
        input: false,
        complete: false,
        quickView: false,
    }
  }

  render() {
    return(
        <View>
          <TouchableOpacity
            onPress={() => {
              this.setState({quickVIew: !this.state.quickView})}
            }
          >
              <IncentiveCard
                  onPress={() => {
                    this.setState({input: !this.state.input})}
                  }
                  iconColor={this.state.complete ? '#fff' : '#2479BD'}
                  containerStyle={{backgroundColor: this.state.complete ? '#2479BD' :'#fff'}}
                  itemTitle={this.props.itemName}
                  itemReward={this.props.itemReward}
                  itemPhoto={this.props.itemPhoto}
              />
        </TouchableOpacity>
             {this.state.input ?
              <Overlay
                  onComplete={() => {
                      this.setState({
                        complete: !this.state.complete,
                        input: !this.state.input
                      })
                    }
                  }
                  onCancel={() => {
                    this.setState({input: !this.state.input})}
                  }
              />
              : <View/>
            }
        </View>


    )
  }
}

export default IncentiveContainer
