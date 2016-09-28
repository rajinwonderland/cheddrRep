import React, {Component, PropTypes} from 'react'
import { StyleSheet, View } from 'react-native'
import { Content, Button } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ActionButton from 'react-native-action-button'

class HomeFAB extends Component {

  render() {
    return (
        <ActionButton buttonColor="#008650" backdrop={true} btnOutRange="#F44336">
          <ActionButton.Item
            buttonColor='#008650'
            title="My Stats"
            onPress={this.props.onStats}>
              <Icon name="multiline-chart" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor='#424242'
            title="Settings"
            onPress={this.props.onSettings}>
              <Icon name="settings" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor='#277abc'
            title="Search Account"
            onPress={this.props.onSearch}>
              <Icon name="search" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
    )
  }
}

export default HomeFAB

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  searchButtonIcon: {
    fontSize: 20,
    height: 22,
    color: '#424242',
  },
});
