import React, { PropTypes } from 'react'
import { ScrollView, Image, View, Text, Dimensions, Platform } from 'react-native'
import DrawerButton from '../Components/DrawerButton'
import styles from './Styles/DrawerContentStyle'
import Routes from '../Navigation/Routes'
import drawerStyles from './Styles/DrawerButtonStyles'
import TextButton from './TextButton'
import { Button, Icon } from 'react-native-elements'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class DrawerContent extends React.Component {
  constructor (props) {
    super(props)
    this.handlePressSearchAccounts = props.onPushRoute.bind(this, Routes.SearchAccounts)
    this.handlePressPresentationScreen = props.onPushRoute.bind(this, Routes.PresentationScreen)
    this.handlePressRepStats = props.onPushRoute.bind(this, Routes.RepStats)
    this.handlePressSettings = props.onPushRoute.bind(this, Routes.Settings)
    this.handlePressLogin = props.onPushRoute.bind(this, Routes.LoginScreen)
  }

  render () {
    return (
        <View style={{flex:2, flexDirection: 'column',  justifyContent: 'center', marginTop: 64, padding: 20}}>
          <ScrollView>
            <DrawerButton img={require("../Images/some-black-guy.png")} textStyles={drawerStyles.text} text='Matt Zimmer' onPress={this.handlePressSettings} />
            <DrawerButton img={require("../Images/nearby-cheddr.png")} textStyles={drawerStyles.text} text='Nearby' onPress={this.handlePressPresentationScreen}/>
            <DrawerButton img={require("../Images/statsWithOval.png")} textStyles={drawerStyles.text} text='Stats' onPress={this.handlePressRepStats} />
            <DrawerButton img={require("../Images/gearWithOval.png")} textStyles={drawerStyles.text} text='Logout' onPress={this.handlePressLogin} />
            <Button raised title='Search' onPress={this.handlePressSearchAccounts} />
          </ScrollView>
        </View>
    )
  }
}

DrawerContent.propTypes = {
  onPushRoute: PropTypes.func.isRequired
}

export default DrawerContent
