import React, {Component} from 'react'
import {View, Image, ScrollView, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import {Card, CardItem, } from 'native-base'
import cardTheme from '../../Themes/cardTheme'
import { Images } from '../../Themes'
import PieChart from './PieChart'



var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


class Qualifier extends Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onTouch}>
      <Card theme={cardTheme} style={[styles.cardWrapper]}>
        <CardItem style={styles.cardItem}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Qualifiers</Text>
              <View style={styles.blockWrap}>
                <View style={{height: 12, width: 12, backgroundColor: '#fdb277',}}/>
                <Text style={styles.subtitle}>10 Qualified</Text>
              </View>
              <View style={styles.blockWrap}>
                <View style={{height: 12, width: 12, backgroundColor: '#277abc',}}/>
                <Text style={styles.subtitle}>5 Tiered</Text>
              </View>
              <View style={styles.blockWrap}>
                <View style={{height: 10, width: 12, backgroundColor: '#008650',}}/>
                <Text style={styles.subtitle}>30 Unqualified</Text>
              </View>
          </View>
          <View style={styles.blocksWrap}>
            <PieChart/>
          </View>
        </CardItem>
      </Card>
      </TouchableOpacity>
    )
  }
}

export default Qualifier


const styles = StyleSheet.create({
  cardWrapper: {
    flex:1,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 1,
    borderBottomColor: 'transparent',
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOpacity: 0.8,
    shadowRadius: 1,
    marginBottom: 10,
    width: width*.94,
  },
  cardItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width*.94,

  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: 'HelveticaNeue',
    color: '#555',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    color: '#757575',
    fontWeight: "500",
    fontFamily: 'HelveticaNeue',
    marginLeft: 5,
  },
  textWrapper: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    width: width*.1,
  },
  blocksWrap: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    overflow: 'visible',

  },
  blockWrap: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignItems: 'center',
    width: 100,
    left: 5,

  },

});
