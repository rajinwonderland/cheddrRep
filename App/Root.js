import React, { PropTypes } from 'react'
import { View, Navigator, StatusBar, AsyncStorage } from 'react-native'
import {Router, Routes, NavigationBar} from './Navigation/'
import { Provider } from 'react-redux'
import Actions from './Actions/Creators'
import Drawer from 'react-native-drawer'
import DebugSettings from './Config/DebugSettings'
import DrawerContent from './Components/DrawerContent'
import Relay, {
  DefaultNetworkLayer,
  RootContainer,
} from 'react-relay';
// import './Config/PushConfig'
import config from '../config'
// Styles
import styles, {drawerStyles} from './Containers/Styles/RootStyle'

export function setNetworkLayer() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("currentUser", (err, res) => {
      var store = JSON.parse(res);
      var options = {};
      if (store) {
        options.headers = {
          Authorization: 'Bearer ' + store.scapholdAuthToken
        }
      }
      else {
        options.headers = {};
      }
      Relay.injectNetworkLayer(
        new Relay.DefaultNetworkLayer(config.scapholdUrl, options)
      );
      resolve(options);
    });
  })
}

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  componentWillMount () {
    const { dispatch } = this.props.store
    dispatch(Actions.startup())
  }

  componentDidMount () {
    this.refs.drawerContent.navigator = this.navigator
    this.navigator.drawer = this.refs.drawer
  }

  handlePushRoute = (route) => {
    this.navigator.push(route)
    this.closeDrawer()
  }

  renderDrawerContent () {
    return (
      <DrawerContent ref='drawerContent' onPushRoute={this.handlePushRoute} onClose={this.closeDrawer} />
    )
  }

  closeDrawer = () => {
    this.refs.drawer.close()
  }

  renderApp () {
    console.disableYellowBox = !DebugSettings.yellowBox
    return (
      <Provider store={this.props.store}>
        <View style={styles.applicationView}>
          <StatusBar
            barStyle='light-content'
          />

          <Drawer
            ref='drawer'
            content={this.renderDrawerContent()}
            styles={drawerStyles}
            type='overlay'
            tapToClose={true}
            openDrawerOffset={0.2} // 20% gap on the right side of drawer
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            tweenHandler={(ratio) => ({
              main: { opacity:(2-ratio)/2 }
            })}

          >
            <Navigator
              ref={(ref) => { this.navigator = ref }}
              initialRoute={Routes.PresentationScreen}
              configureScene={Router.configureScene}
              renderScene={Router.renderScene}
              navigationBar={NavigationBar.render()}
              style={styles.container}
            />
          </Drawer>
        </View>
      </Provider>
    )
  }

  render () {
    return this.renderApp()
  }
}
