import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import {Container, Button, Header, Content, Footer, Grid, Col, Row, Title, Text, Card, CardItem, List, ListItem} from 'native-base';
import ResponsiveImage from 'react-native-responsive-image'
import cheddrTheme from '../Themes/cheddrTheme'
import cardTheme from '../Themes/cardTheme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FAB from './FAB'



  class ItemQuickView extends Component {
    render() {
      return (
            <View>
                <CardItem style={{paddingBottom: 30, borderBottomColor: '#f5f5f5'}}>
                  <Text style={styles.title}>{this.props.brand}</Text>
                  <Text style={styles.subtitle}>{this.props.description}</Text>
                </CardItem>
              <CardItem style={styles.tieredItem}>
                  <View style={{
                    flex: 2,
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                      <Text style={styles.title}>
                         Reward
                      </Text>
                      <Text style={styles.subtitle}>{this.props.rewardType}</Text>
                  </View>
                  <View style={{
                    flex: 3,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center'
                  }}>
                    <List>
                      <Text>Qualifier: {this.props.qualifier}</Text>
                      <Text style={{fontWeight: 'bold', fontFamily: 'HelveticaNeue'}}>{this.props.reward1}</Text>
                    </List>
                  </View>
              </CardItem>
              <CardItem style={styles.incentiveButton}>
                <Button block transparent style={styles.button}>
                  <Text style={styles.buttonText}>VALID: {this.props.dateRange}</Text>
                </Button>
            </CardItem>
          </View>
        )
      }
    }

export default ItemQuickView

const styles = StyleSheet.create({
  itemContainer: {
    fontSize: 14,
    fontFamily: 'HelveticaNeue',
    fontWeight: "600",
    color: '#000',
  },
  tieredItem: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    borderBottomColor: '#f5f5f5'
  },
  title: {
    fontSize: 12,
    fontFamily: 'HelveticaNeue',
    fontWeight: "600",
    color: '#424242'
  },
  subtitle: {
    fontSize: 10,
    color: '#555'
  },
  incentiveButton: {
    padding: 0,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-around'

  },
  button : {
    margin: 0,
    padding: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#008650',
    fontSize: 12,
    fontFamily: 'HelveticaNeue',
    fontWeight: "400",
    marginBottom: 5,
  },
});
