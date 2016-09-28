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
        <View style={styles.wrapper}>
            <Text style={styles.message}>
              Input your number of units sold
            </Text>
            <View style={styles.overlay}>
                <Icon
                  name='minus'
                  type='font-awesome'
                  color='white'
                  size={36}
                />
                <TextInput
                  onChangeText={this.handleChangeSale}
                  ref='sale'
                  style={styles.textInput}
                  value={sale}
                  keyboardType='numeric'
                  returnKeyType='done'
                  placeholder='1'
                  placeholderTextColor='#FFB829'
              />

                <Icon
                  name='plus'
                  type='font-awesome'
                  color='white'
                  size={36}
                  onPress={this.addToSale}
                />
            </View>
            <View style={styles.buttons}>
              <Button
                raised
                title='Cancel'
                backgroundColor='#B71C1C'
              />
              <Button
                raised
                title='Complete'
                backgroundColor='#008650'
                onPress={this.handleChangeSale}
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
    width: 125,
    height: 100,
    alignSelf: 'center',
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
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'HelveticaNeue',
  }
});
