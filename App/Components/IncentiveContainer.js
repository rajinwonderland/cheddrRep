import React, {Component} from 'react'
import { View, Image, Text, StyleSheet, Dimensions, Platform, TextInput } from 'react-native'
import { Card, ListItem, Button, Icon, } from 'react-native-elements'
import Overlay from './Overlay'
import IncentiveCard from './IncentiveCard'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


class IncentiveContainer extends Component{
  constructor(props) {
    super(props)

    this.state = {
        input: false,
        complete: false,
    }
  }

  render() {
    return(
        <View>
              <IncentiveCard
                  onPress={() => {
                    this.setState({input: !this.state.input})}
                  }
                  iconColor={this.state.complete ? '#fff' : '#2479BD'}
                  containerStyle={{backgroundColor: this.state.complete ? '#2479BD' :'#fff'}}
                  itemTitle={this.props.itemTitle}
                  itemReward={this.props.itemReward}
                  itemPhoto={this.props.itemPhoto}
              />
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
