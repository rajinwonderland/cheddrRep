import React, {Component} from 'react'
import { View, Image, Text, StyleSheet, Dimensions, Platform, TextInput } from 'react-native'
import { Card, ListItem, Button, Icon, } from 'react-native-elements'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


class Overlay extends Component {
  constructor(props) {
    super(props)
      this.state = {

      };
  }

  handleChangeSale = (text) => {
    const sale = parseInt(text,10);
  }
  addToSale = (sale) => {
    (sale + 1).toString('sale')
  }

  render() {
    const sale = 1;
    return(
        <View style={[styles.wrapper, this.props.overlayStyle]}>
            <Text style={styles.message}>
              Input your number of units sold
            </Text>
            <TextInput
              onChangeText={this.props.onChangeText}
              ref='sale'
              style={styles.textInput}
              value={sale}
              keyboardType='numeric'
              returnKeyType='done'
              placeholder='1'
              placeholderTextColor='#FFB829'
          />
            <View style={styles.buttons}>
              <Button
                small
                title='Cancel'
                backgroundColor='#B71C1C'
                onPress={this.props.onCancel}
              />
              <Button
                small
                title='Complete'
                backgroundColor='#008650'
                onPress={this.props.onComplete}
              />
            </View>
          </View>
     )
  }
}

export default Overlay

const styles= StyleSheet.create({
  textInput: {
    fontSize: 56,
    marginBottom: 10,
    textAlign: 'center',
    height: 100,
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    color: '#fff',
    padding: 12
  },
  overlay: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    flexDirection: 'column',
    position: 'absolute',
    top: -8,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    width: width*1,
    alignSelf: 'center',
    alignItems: 'center',
  },
  message: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'HelveticaNeue',
  }
});
