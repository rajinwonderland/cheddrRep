import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import {Container, Button, Header, Content, Title, Text, Card, CardItem, Grid, Col} from 'native-base';
import ResponsiveImage from 'react-native-responsive-image'
import cheddrTheme from '../Themes/cheddrTheme'
import cardTheme from '../Themes/cardTheme'
import FAB from './FAB'
import ItemTitle from './ItemTitle'
import CheddrInput from './CheddrInput'
import ItemCompleted from './ItemCompleted'
import { Icon, FormLabel, FormInput } from 'react-native-elements'

  class ItemRecordSale extends Component {
    constructor(props) {
      super(props)

      this.state= {
        exit: false,
        completed: false,
      }

    }

    render() {

      return (
        <View>
          {this.state.exit ? <ItemTitle itemName={this.props.itemName} itemReward={this.props.itemReward} /> :
          <CardItem style={styles.cardItem}>
              {this.state.completed ? <Text style={styles.completeTitle}>Your Sale has been Recorded!</Text> :
              <CheddrInput
                  label={"Units Sold"}/>
              }
              {this.state.completed ? <Icon name={"done-all"} color={'#008650'} size={15} /> :
                <Icon
                 containerStyle={{backgroundColor: 'red'}}
                 size={15}
                 name={'close'}
                 color={'#fff'}
                 onPress={() => {
                   this.setState({exit: !this.state.exit})}}/>
            }
            <Icon
              raised
              size={15}
              containerStyle={{backgroundColor: this.state.completed ? '#277abc' :'#008650'}}
              name={this.state.completed ? 'mode-edit' :'done'}
              color={'white'}
              onPress={() => {
                this.setState({completed: !this.state.completed})}}/>
          </CardItem>
          }
        </View>
        )

      }
    }



export default ItemRecordSale

const styles = StyleSheet.create({
  cardItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: 'visible'
  },
  inputView: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: '#000'
  },
  completeTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: '#999'
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "300",
    color: '#000'
  },
});
