import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'
import {Container, Button, Header, Content, Title, Card, CardItem,} from 'native-base';
import ResponsiveImage from 'react-native-responsive-image'
import cheddrTheme from '../Themes/cheddrTheme'
import cardTheme from '../Themes/cardTheme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FAB from './FAB'
import ItemRecordSale from './ItemRecordSale'
import CheddrInput from './CheddrInput'


  class ItemCompleted extends Component {
    constructor(props) {
      super(props)

      this.state= {
        edit: false,
      }

    }

    render() {

      return (
        <View>
          {this.state.edit ? <ItemRecordSale/> :
          <CardItem style={styles.cardItem}>
            <Text style={styles.title}>Your Sale has been Recorded!</Text>
            <Icon name={"done-all"} color={'green'} size={20} />

            <FAB
              fabColor={'#277abc'}
              iconName={'mode-edit'}
              iconColor={'#fff'}
              touchPress={() => { this.setState({edit: !this.state.edit })}}>
            </FAB>
          </CardItem>
          }
        </View>
        )

      }
    }



export default ItemCompleted

const styles = StyleSheet.create({
  cardItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputView: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center',
  },
  title: {
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
