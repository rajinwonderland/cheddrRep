import React, { Component } from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native'
import Chart from 'react-native-chart';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;



const styles = StyleSheet.create({

    chart: {
        height: 150,
        width: 150,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
          height: 2,
          width: 1,
        },
        resizeMode: 'cover',
    },
});

const data = [
    [0, 5],
    [1, 10],
    [3, 30],
];

const colors = [
  "#277abc",
  "#fdb729",
  "#008650",

];

class PieChart extends Component {
    render() {
        return (
          <Image source={require('../../Images/pieChart.png')} style={styles.chart}/>
        );
    }
}

export default PieChart
