import React, {Component} from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'
import {CardItem, } from 'native-base'
import ResponsiveImage from 'react-native-responsive-image'
import FAB from './FAB'
import ItemQuickView from './ItemQuickView'
import ItemTitle from './ItemTitle'
import cheddrTheme from '../Themes/cheddrTheme'
import Images from '../Themes/Images'

var width = Dimensions.get('window').width;

class ItemMain extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
      add: false,
    }


  }

  render(){
    return (
      <View>
      <TouchableOpacity
          onPress={() => {
            this.setState({expanded: !this.state.expanded})}
          }
      >
          {
            this.state.expanded ?


          <CardItem style={styles.imageContainer}>
             <ResponsiveImage style={styles.responsiveImage} source={this.props.itemPhoto} initHeight="241.18" initWidth="325"></ResponsiveImage>
          </CardItem>
            :
            <CardItem style={styles.imageContainer2}>
              <ResponsiveImage style={styles.responsiveImage2} source={(this.props.itemPhoto)} initHeight="241.18" initWidth="325"></ResponsiveImage>
            </CardItem>
         }
           <ItemTitle
              itemName={this.props.itemName}
              itemReward={this.props.itemReward}
              onPress={this.props.onPress}
              iconColor={this.props.iconColor}
              containerStyle={this.props.containerStyle}
          />
          </TouchableOpacity>
        {
              this.state.expanded ?
               <ItemQuickView
                 brand={this.props.brand}
                 description={this.props.description}
                 rewardType={this.props.rewardType}
                 qualifier={this.props.qualifier}
                 dateRange={this.props.dateRange}
                 reward1={this.props.itemReward}/>
              :
                undefined
        }
        </View>

      );
  }
}

export default ItemMain

const styles = StyleSheet.create({
  imageContainer: {
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer2: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  responsiveImage: {
    width: width*.94,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  responsiveImage2: {
    width: width*.94,
    height: 75,
    alignSelf: 'center',
  },
});
