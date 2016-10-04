/*import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Autocomplete from 'react-native-autocomplete-input'

const place = [
{
  address:"12620 SE 41st Place"
  name:"Walmart (0.2 mi)"
  iconName:"local-convenience-store"
  distance:{176.2122*mi}
},
{
  address:"1001 6th Ave South"
  name:"Big John's Pfi"
  iconName:"local-grocery-store"
  distance:{356.0183*mi}
},
{
  address:"135 S King St"
  name:"Cone & Steiner"
  iconName:"local-grocery-store"
  distance:{460.66388*mi}
},
{
  address:"600 5th Ave S"
  name:"Uwajimaya"
  iconName:"local-grocery-store"
  distance:{479.99738*mi}
},
{
  address:"800 Maynard Ave S"
  name:"Full Circle"
  iconName:"local-grocery-store"
  distance:{541.61536*mi}
},
{
  address:"413 1st Ave S"
  name:"Pop In"
  iconName:"local-convenience-store"
  distance:{545.86*mi}
},
{
  address: "800 Maynard Ave S"
  name: "Victoria's Treasure"
  iconName: "local-grocery-store"
  distance:{550.72687*mi}
},
{
  address:"508 S King St"
  name:"Pan Asian Food Mart"
  iconName:"local-grocery-store"
  distance:{587.11115*mi}
},
{
  address:"610 S Weller St"
  name:"Pacific Herb & Grocery"
  iconName:"local-grocery-store"
  distance:{590.2179*mi}
},
{
  address:"502 6th Ave S"
  name:"Hoven Foods Co."
  iconName:"local-grocery-store"
  distance:{603.291*mi}
},
{
  address:"501 S Jackson St"
  name:"Union Station Market"
  iconName:"local-grocery-store"
  distance:{611.13104*mi}
},
{
  address:"302 4th Ave S"
  name:"Ew Mart"
  iconName:"local-grocery-store"
  distance:{690.06104*mi}
},
{
  address:"625 S Jackson St"
  name:"Dong Hing Market"
  iconName:"local-grocery-store"
  distance:{726.4412*mi}
},
{
  address:"1702 4th Ave S"
  name:"Grocery Outlet"
  iconName:"local-grocery-store"
  distance:{735.8019*mi}
},
{
  address:"516 7th Ave S"
  name:"Golden Hong Market"
  iconName:"local-grocery-store"
  distance:{739.76965*mi}
},
{
  address:"520 S Massachusetts St"
  name:"R & K Foods"
  iconName:"local-grocery-store"
  distance:{746.0597*mi}
},
{
  address:"651 S Jackson St"
  name:"Kue Hing Co."
  iconName:"local-grocery-store"
  distance:{758.8819*mi}
},
{
  address:"705 S King St"
  name:"Bao An Herbs And Grocery"
  iconName:"store-mall-directory"
  distance:{776.9779*mi}
},
{
  address:"109 Occidental Ave S"
  name:"Saveway Market"
  iconName:"local-grocery-store"
  distance:{791.2328*mi}
},
{
  address:"815 S Weller St"
  name:"Greenland"
  iconName:"local-grocery-store"
  distance:{813.01825*mi}

}];

class NewSearch extends Component {
  static renderplace(place) {
    const { name, address, } = place;


    return (
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.directorText}>({address})</Text>
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      places: [],
      query: ''
    };
  }

  componentDidMount() {
      this.setState({ places });
      }

  findplace(query) {a
    if (query === '') {
      return [];
    }

    const { places } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return places.filter(place => place.title.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const places = this.findplace(query);
    const comp = (s, s2) => s.toLowerCase().trim() === s2.toLowerCase().trim();
    return (
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          data={places.length === 1 && comp(query, places[0].name) ? [] : places}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          placeholder="Enter Star Wars place title"
          renderItem={({ name, category }) => (
            <TouchableOpacity onPress={() => this.setState({ query: name })}>
              <Text style={styles.itemText}>
                {name}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.descriptionContainer}>
          {places.length > 0 ? (
            NewSearch.renderplace(places[0])
          ) : (
            <Text style={styles.infoText}>
              Enter Title of a Star Wars movie
            </Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    paddingTop: 25
  },
  autocompleteContainer: {
    marginLeft: 10,
    marginRight: 10,
    borderColor: 'transparent'
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 8,
    borderColor: 'transparent'
  },
  infoText: {
    textAlign: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center'
  },
  openingText: {
    textAlign: 'center'
  }
});

export default NewSearch */
