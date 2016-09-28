import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'
import {CardItem } from 'native-base'
import FAB from './FAB'
import ItemRecordSale from './ItemRecordSale'
import ItemQuickView from './ItemQuickView'
import cheddrTheme from '../Themes/cheddrTheme'
import { Icon } from 'react-native-elements'

var width = Dimensions.get('window').width;

class ItemTitle extends Component {
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
         {this.state.add ? <ItemRecordSale itemName={this.props.itemName} itemReward={this.props.itemReward}/> :
          <CardItem style={styles.cardItem}>
              <View style={styles.textWrapper}>

                <Text style={styles.title}>
                    {this.props.itemName}
                </Text>
                <Text style={styles.subtitle}>{this.props.itemReward}</Text>
            </View>
            <Icon
              raised
              size={15}
              containerStyle={{backgroundColor: '#008650'}}
              name={this.state.add ? 'done' : 'add'}
              color={'white'}
              onPress={() => {
                this.setState({add: !this.state.add})}}/>
          </CardItem>
          }
        </View>

      );
  }
}
const mapStateToProps = (state) => {
  return {
  }
}

export default ItemTitle

const styles = StyleSheet.create({
  cardItem: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: '#f5f5f5',
  },
  title: {
    fontSize: 12.5,
    fontFamily: 'HelveticaNeue',
    fontWeight: "600",
    color: '#424242'
  },
  subtitle: {
    fontSize: 10,
    fontFamily: 'HelveticaNeue',
    color: '#777'
  },
  textWrapper: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
