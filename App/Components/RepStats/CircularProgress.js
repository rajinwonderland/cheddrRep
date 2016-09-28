import React, { Component } from 'react';
import {StyleSheet, View, Dimensions} from 'react-native'
import {AnimatedCircularProgress} from 'react-native-circular-progress'
import {Card, CardItem, } from 'native-base'
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width*1,
        marginTop: 20,

    },
    chart: {
        height: 200,
        width: width*.94,
        borderRadius: 1,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOpacity: 0.8,
        shadowRadius: 1.5,

    },
});


class CircularProgress extends Component {
    render() {
        return (
            <View style={styles.container}>
                  <AnimatedCircularProgress
                    size={120}
                    width={15}
                    fill={this.props.percentage}
                    tintColor="#008650"
                    backgroundColor="#999" />
            </View>
        );
    }
}

export default CircularProgress
