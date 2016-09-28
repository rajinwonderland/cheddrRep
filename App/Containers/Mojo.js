import React, { PropTypes } from 'react'
import { View, ScrollView, Text, LayoutAnimation, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import Routes from '../Navigation/Routes'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import PlaceInfo from '../Components/PlaceInfo'
import ItemsList from '../Components/ItemsList'
import ItemCard from '../Components/ItemCard'
import TieredCard from '../Components/TieredCard'
import IncentiveCard from '../Components/IncentiveCard'

// Styles
import styles from './Styles/MojoStyle'

// I18n
import I18n from '../I18n/I18n.js'

class Mojo extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight
    }
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this))
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this))

    // Configure nav button
    this.props.navigator.state.tapHamburger = () => {
      this.props.navigator.drawer.toggle()
    }
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow (e) {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize
    })
  }

  keyboardDidHide (e) {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight
    })
  }

  render () {
    return (
      <ScrollView
        style={[styles.mainContainer, {flex: 1}]}
        contentOffset={{y:130}}
        >
        <PlaceInfo
          address="12620 SE 41st Pl"
          name="Walmart"
          iconName="local-convenience-store"
        />
        <IncentiveCard />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(Mojo)
