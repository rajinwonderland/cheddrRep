import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, Dimensions } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import cheddrTheme from '../Themes/cheddrTheme'
import HomeFAB from '../Components/HomeFAB'
import PlaceCard from '../Components/PlaceCard'
import what from '../Components/Styles/PlaceCardStyle'
import LocationCard from '../Components/LocationCard'

// Styles
import styles from './Styles/PresentationScreenStyle'
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
console.disableYellowBox = true;
var mi = 0.000621371;


class PresentationScreen extends React.Component {

  componentWillMount () {
    this.props.navigator.state.tapHamburger = () => {
      this.props.navigator.drawer.toggle()
    },
    this.props.navigator.state.tapSearch = () => {
      this.props.navigator.push(Routes.SearchAccounts)
    }
  }

  render () {
    return (
      <View style={[styles.mainContainer]}>
        <ScrollView>
        <View style={{padding: 15, paddingLeft: 5, flexDirection: 'column', alignSelf: 'center', alignItems: 'flex-start', width: width*.94}}>
        <Text style={what.title}>nearest account:</Text>
        </View>
          <LocationCard
            address="12620 SE 41st Place"
            name="Walmart (0.2 mi)"
            iconName="local-convenience-store"
            distance={176.2122*mi}
            onPress={() => this.props.navigator.push(Routes.Mojo)}/>
          <View style={{padding: 15, paddingLeft: 5, flexDirection: 'column', alignSelf: 'center', alignItems: 'flex-start', width: width*.94}}>
            <Text style={what.title}>other nearby accounts:</Text>
          </View>
          <PlaceCard
            address="1001 6th Ave South"
            name="Big John's Pfi"
            iconName="local-grocery-store"
            distance={356.0183*mi}
            onPress={() => this.props.navigator.push(Routes.Big)}/>
          <PlaceCard
            address="135 S King St"
            name="Cone & Steiner"
            iconName="local-grocery-store"
            distance={460.66388*mi}
            onPress={() => this.props.navigator.push(Routes.Cone)}/>
          <PlaceCard
            address="600 5th Ave S"
            name="Uwajimaya"
            iconName="local-grocery-store"
            distance={479.99738*mi}
            onPress={() => this.props.navigator.push(Routes.Uwajimaya)}/>
          <PlaceCard
            address="800 Maynard Ave S"
            name="Full Circle"
            iconName="local-grocery-store"
            distance={541.61536*mi}
            onPress={() => this.props.navigator.push(Routes.Full)}/>
          <PlaceCard
            address="413 1st Ave S"
            name="Pop In"
            iconName="local-convenience-store"
            distance={545.86*mi}
            onPress={() => this.props.navigator.push(Routes.Pop)}/>
          <PlaceCard
            address= "800 Maynard Ave S"
            name= "Victoria's Treasure"
            iconName= "local-grocery-store"
            distance={550.72687*mi}
            onPress={() => this.props.navigator.push(Routes.Victoria)}/>
          <PlaceCard
            address="508 S King St"
            name="Pan Asian Food Mart"
            iconName="local-grocery-store"
            distance={587.11115*mi}
            onPress={() => this.props.navigator.push(Routes.Pan)}/>
          <PlaceCard
            address="610 S Weller St"
            name="Pacific Herb & Grocery"
            iconName="local-grocery-store"
            distance={590.2179*mi}
            onPress={() => this.props.navigator.push(Routes.Pacific)}/>
          <PlaceCard
            address="502 6th Ave S"
            name="Hoven Foods Co."
            iconName="local-grocery-store"
            distance={603.291*mi}
            onPress={() => this.props.navigator.push(Routes.Hoven)}/>
          <PlaceCard
            address="501 S Jackson St"
            name="Union Station Market"
            iconName="local-grocery-store"
            distance={611.13104*mi}
            onPress={() => this.props.navigator.push(Routes.Union)}/>
          <PlaceCard
            address="302 4th Ave S"
            name="Ew Mart"
            iconName="local-grocery-store"
            distance={690.06104*mi}
            onPress={() => this.props.navigator.push(Routes.Ew)}/>
          <PlaceCard
            address="625 S Jackson St"
            name="Dong Hing Market"
            iconName="local-grocery-store"
            distance={726.4412*mi}
            onPress={() => this.props.navigator.push(Routes.Dong)}/>
          <PlaceCard
            address="1702 4th Ave S"
            name="Grocery Outlet"
            iconName="local-grocery-store"
            distance={735.8019*mi}
            onPress={() => this.props.navigator.push(Routes.Grocery)}/>
          <PlaceCard
            address="516 7th Ave S"
            name="Golden Hong Market"
            iconName="local-grocery-store"
            distance={739.76965*mi}
            onPress={() => this.props.navigator.push(Routes.Golden)}/>
          <PlaceCard
            address="520 S Massachusetts St"
            name="R & K Foods"
            iconName="local-grocery-store"
            distance={746.0597*mi}
            onPress={() => this.props.navigator.push(Routes.RnK)}/>
          <PlaceCard
            address="651 S Jackson St"
            name="Kue Hing Co."
            iconName="local-grocery-store"
            distance={758.8819*mi}
            onPress={() => this.props.navigator.push(Routes.Kue)}/>
          <PlaceCard
            address="705 S King St"
            name="Bao An Herbs And Grocery"
            iconName="store-mall-directory"
            distance={776.9779*mi}
            onPress={() => this.props.navigator.push(Routes.Bao)}/>
          <PlaceCard
            address="109 Occidental Ave S"
            name="Saveway Market"
            iconName="local-grocery-store"
            distance={791.2328*mi}
            onPress={() => this.props.navigator.push(Routes.Saveway)}/>
          <PlaceCard
            address="815 S Weller St"
            name="Greenland"
            iconName="local-grocery-store"
            distance={813.01825*mi}
            onPress={() => this.props.navigator.push(Routes.Greenland)}/>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(PresentationScreen)
