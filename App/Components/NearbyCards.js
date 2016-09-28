import React, {Component} from 'react'
import {View, ListView, TouchableOpacity} from 'react-native'
import immutable from 'immutable'
import PlaceCard from './PlaceCard'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'


const data = immutable.fromJS([
  {
    address: "1021 Occidental Ave S",
    "category_labels": [
      [
        "Retail",
        "Convenience Stores"
      ]
    ],
    name: "Mojo Market",
    iconName: "local-convenience-store",
    "$distance": 176.2122
  },
  {
    address: "1001 6th Ave S",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "Big John's Pfi",
    iconName: "local-grocery-store",
    "$distance": 356.0183
  },
  {
    address: "135 S King St",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "Cone & Steiner",
    iconName: "local-grocery-store",
    "$distance": 460.66388
  },
  {
    address: "600 5th Ave S",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "Uwajimaya",
    iconName: "local-grocery-store",
    "$distance": 479.99738
  },
  {
    address: "800 Maynard Ave S",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "Full Circle",
    iconName: "local-grocery-store",
    "$distance": 541.61536
  },
  {
    address: "413 1st Ave S",
    "category_labels": [
      [
        "Retail",
        "Convenience Stores"
      ]
    ],
    name: "Pop In",
    iconName: "local-convenience-store",
    "$distance": 545.86
  },
  {
    address: "800 Maynard Ave S",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "Victoria's Treasure",
    iconName: "local-grocery-store",
    "$distance": 550.72687
  },
  {
    address: "508 S King St",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "Pan Asian Food Mart",
    iconName: "local-grocery-store",
    "$distance": 587.11115
  },
  {
    address: "610 S Weller St",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "Pacific Herb & Grocery",
    iconName: "local-grocery-store",
    "$distance": 590.2179
  },
  {
    address: "502 6th Ave S",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "Hoven Foods Co.",
    iconName:"local-grocery-store",
    "$distance": 603.291
  },
  {
    address: "501 S Jackson St",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "Union Station Market",
    iconName: "local-grocery-store",
    "$distance": 611.13104
  },
  {
    address: "302 4th Ave S",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "Ew Mart",
    iconName: "local-grocery-store",
    "$distance": 690.06104
  },
  {
    address: "625 S Jackson St",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "Dong Hing Market",
    iconName: "local-grocery-store",
    "$distance": 726.4412
  },
  {
    address: "1702 4th Ave S",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "Grocery Outlet",
    iconName: "local-grocery-store",
    "$distance": 735.8019
  },
  {
    address: "516 7th Ave S",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "Golden Hong Market",
    iconName: "local-grocery-store",
    "$distance": 739.76965
  },
  {
    address: "520 S Massachusetts St",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "R & K Foods",
    iconName: "local-grocery-store",
    "$distance": 746.0597
  },
  {
    address: "651 S Jackson St",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "Kue Hing Co.",
    iconName: "local-grocery-store",
    "$distance": 758.8819
  },
  {
    address: "705 S King St",
    "category_labels": [
      [
        "Retail",
        "Food and Beverage"
      ]
    ],
    name: "Bao An Herbs And Grocery",
    iconName: "store-mall-directory",
    "$distance": 776.9779
  },
  {
    address: "109 Occidental Ave S",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "Saveway Market",
    iconName: "local-grocery-store",
    "$distance": 791.2328
  },
  {
    address: "815 S Weller St",
    "category_labels": [
      [
        "Retail",
        "Supermarkets and Groceries"
      ]
    ],
    name: "Greenland",
    iconName: "local-grocery-store",
    "$distance": 813.01825
  }

  ])


const Row = ({name, address, iconName}) => (
    <PlaceCard name={name} address={address} iconName={iconName}/>
)


const renderRow = (rowData) => (
      <Row name={rowData.get('name')}
           address={rowData.get('address')}
           iconName={rowData.get('iconName')}
           />
)



class NearbyCards extends Component {
    constructor() {
        super()
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => !immutable.is(r1, r2),
        })
        this.state = {
            dataSource: ds.cloneWithRows(data.toArray())
        }
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={renderRow}/>
        )
    }
}

export default NearbyCards
