import React, { Component } from 'react';
import {Animated, Text, StyleSheet, View, Dimensions} from 'react-native'
import Chart from 'react-native-chart';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;



const styles = StyleSheet.create({
  chart: {
    alignSelf: 'flex-start',
    width: 100,
    height: 10,
    backgroundColor: '#008650',
    marginTop: 2,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  subtitle: {
    fontSize: 11,
    color: '#757575',
    fontFamily: 'HelveticaNeue',
    marginLeft: 2.5,
  },
});



class BarChart extends Component {
    render() {
      return(
        <View style={styles.wrapper}>
          <View style={[styles.chart, this.props.barStyle]}/>
          <Text style={styles.subtitle}>{this.props.value}</Text>
        </View>
      )

    }
}


export default BarChart
