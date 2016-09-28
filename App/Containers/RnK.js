import React, { PropTypes } from 'react'
import { View, ScrollView, Text, LayoutAnimation, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import Routes from '../Navigation/Routes'
import { Metrics } from '../Themes'
import PlaceInfo from '../Components/PlaceInfo'
import ItemsList from '../Components/ItemsList'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import ItemCard from '../Components/ItemCard'
import TieredCard from '../Components/TieredCard'

// Styles
import styles from './Styles/RnKStyle'

// I18n
import I18n from '../I18n/I18n.js'

class RnK extends React.Component {

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
          address="520 S Massachusetts St"
          name="R & K Foods"
          iconName="local-grocery-store"
        />
        <ItemCard brand='Noahs Water' itemName='24 oz cap can, 12 pk, spring water' itemReward='$0.25 / Case' itemPhoto={require('../Images/noahsWater.png')} description='Noahs Water Premium Push - Case cost discounted by $1 down to $4.35/case on orders of 3+ SKU' rewardType='FLAT' qualifier='0 Cases' dateRange='8/16/16-9/16/16'/>
        <ItemCard brand='Vita Coco' itemName='12 pack, 11.1 fl oz cartons' itemReward='$1.00 / Case' itemPhoto={require('../Images/vitaCoco.png')} description='Q4 Fast Start Incentive - Top 5 win $1000 gift card' rewardType= 'FLAT' qualifier='10 Cases'  dateRange='8/01/16-12/31/16'/>
        <TieredCard brand='Stone' itemName='Delicious IPA, 6pk, 12oz' itemPhoto={require('../Images/stoneIpa.png')} itemReward='$1.00 / Case (1-50)'  description='Fall Kickoff, Earn on EVERY CASE SOLD, Top performer- Apple WATCH' rewardType='TIERED' qualifier='20 Cases' dateRange='8/01/16-12/31/16' reward1='$1.00 / Case (1-50)' reward2='$1.25 / Case (50-100)' reward3='$1.50 / Case (100+)'/>
        <ItemCard brand='Talking Rain' itemName= 'Sparkling Ice Mixed Pack, 170z, 18pk' itemPhoto= {require('../Images/iceCase.png')} itemReward='$0.25 / Case' description='Sparkling ICE Q1 Cash Payout, Store must hit 2015 volume threshold to qualify' rewardType='FLAT' qualifier='200 Cases' dateRange='1/01/16-12/31/16'/>
        <TieredCard brand='Hop River' itemName='Light Me Up Lager, 16 oz cans, 6 pk' itemPhoto={require('../Images/hopRiver.png')} itemReward='$2.00 / Case' description='NEW ITEM LAUNCH!!!  Premium accounts only = BIG PAYOUTS!' rewardType='TIERED' qualifier='0 Cases' dateRange='End of 2016' reward1='$2.00 / Case (1-500)' reward2='$3.00 / Case (500-1000)' reward3='$4.00 / Case (1000+)'/>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(RnK)
