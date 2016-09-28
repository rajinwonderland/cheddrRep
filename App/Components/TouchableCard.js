import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import RoundedButton from '../Components/RoundedButton'
import {Card, CardItem, Thumbnail, } from 'native-base'
import cardTheme from '../Themes/cardTheme'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class TouchableCard extends React.Component {

  static propTypes = {
    navigator: React.PropTypes.object,
    text: React.PropTypes.string,
    onPress: React.PropTypes.func.isRequired,
    children: React.PropTypes.string
  }

  getText () {
    const buttonText = this.props.text || this.props.children.toString()
    return buttonText.toUpperCase()
  }

  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Card theme={cardTheme} style={styles.cardWrapper}>
          <CardItem style={{paddingBottom: 0}}>
            <Icon name={this.props.iconName} size={50} color={this.props.iconColor}/>
          </CardItem>
          <CardItem>
            <Text style={this.props.styleText}>{this.getText()}</Text>
          </CardItem>
        </Card>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  cardWrapper: {
    flex:1,
    borderColor: 'transparent',
    marginTop: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
    borderRadius: 0,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    }
  },

});
