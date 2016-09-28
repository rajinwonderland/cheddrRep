import React, {Component} from 'react'
import {Content} from 'native-base'
import {GooglePlacesAutocomplete} from '../APIs/PlacesAPI'
import PlaceCard from '../Components/PlaceCard'


let homePlace = {description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
let workPlace = {description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

class SearchBar extends Component {
  render() {
    return (
      <Content>
        <GooglePlacesAutocomplete
              placeholder='Search Accounts'
              minLength={2} // minimum length of text to search
              autoFocus={false}
              fetchDetails={true}
              enablePoweredByContainer={false}
              onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                console.log(data);
                console.log(details);
              }}
              getDefaultValue={() => {
                return ''; // text input default value
              }}
              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyAnMcYCuXg_JH2vP7AE09wIGCqyfoKYGJs',
                language: 'en', // language of the results
                type: 'establishment', // default: 'geocode'
              }}


              currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
              fetchDetails={true}
              currentLocationLabel="Current location"
              nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
              GoogleReverseGeocodingQuery={{
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
              }}
              GooglePlacesSearchQuery={{
                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                rankby: 'distance',
                type: 'grocery_or_supermarket',
              }}


              filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

              predefinedPlaces={[homePlace, workPlace]}
            />
        </Content>
      );
  }
}

export default SearchBar
