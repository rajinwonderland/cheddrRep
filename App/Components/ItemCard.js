import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'
import {Container, Button, Header, Content, Title, Text, Card, CardItem, List, ListItem} from 'native-base';
import ResponsiveImage from 'react-native-responsive-image'
import cheddrTheme from '../Themes/cheddrTheme'
import cardTheme from '../Themes/cardTheme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FAB from './FAB'
import ItemQuickView from './ItemQuickView'
import ItemRecordSale from './ItemRecordSale'
import ItemMain from './ItemMain'
import Overlay from './Overlay'

var width = Dimensions.get('window').width;

class ItemCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
      add: false,
      complete: false,
      input: false,
    }


  }


  render() {
    return (
        <View style={{backgroundColor: 'transparent', margin: 10}}>
          <Card theme={cardTheme} style={styles.cardWrapper}>
              <ItemMain itemPhoto={this.props.itemPhoto}
                  brand={this.props.brand}
                  itemName={this.props.itemName}
                  description={this.props.description}
                  rewardType={this.props.rewardType}
                  qualifier={this.props.qualifier}
                  dateRange={this.props.dateRange}
                  itemReward={this.props.itemReward}
                  reward1={this.props.itemReward}
                  onPress={() => {
                    this.setState({input: !this.state.input})}
                  }
                  iconColor={this.state.complete ? '#fff' : '#2479BD'}
                  containerStyle={{backgroundColor: this.state.complete ? '#2479BD' :'#fff'}}/>
            </Card>
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
                    this.setState({input: !this.state.input, complete: !this.state.complete})}
                  }
                />
            :
              <View/>
            }
       </View>

    );
  }
}

export default ItemCard

const styles = StyleSheet.create({
  cardWrapper: {
    flex:1,
    borderColor: 'transparent',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    width: width*.94,
    borderRadius: 1,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOpacity: 0.8,
    shadowRadius: 1.5,
    shadowOffset: {
      height: 0,
      width: 0,
    }
  },

});
