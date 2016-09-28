import React, {Component} from 'react'
import {View, ListView, TouchableOpacity} from 'react-native'
import immutable from 'immutable'
import ItemCard from './ItemCard'


const data = immutable.fromJS([
  {brand: 'Noahs Water', itemName: '24 oz cap can, 12 pk, spring water', itemReward: '$0.25 / Case', itemPhoto: require('../Images/noahsWater.png'), description: 'Noahs Water Premium Push - Case cost discounted by $1 down to $4.35/case on orders of 3+ SKU', rewardType:'FLAT', qualifier:'0 Cases' , dateRange:'8/16/16-9/16/16' },
  {brand: 'Vita Coco', itemName: '12 pack, 11.1 fl oz cartons', itemReward: '$1.00 / Case', itemPhoto: require('../Images/vitaCoco.png'), description:'Q4 Fast Start Incentive - Top 5 win $1000 gift card', rewardType: 'FLAT', qualifier:'10 Cases' , dateRange:'8/01/16-12/31/16' },
  {brand: 'Stone' , itemName: 'Delicious IPA, 6pk, 12oz', itemPhoto: require('../Images/stoneIpa.png'), itemReward:'$1.00 / Case (1-50)' , description: 'Fall Kickoff, Earn on EVERY CASE SOLD, Top performer- Apple WATCH', rewardType:'TIERED', qualifier:'20 Cases' , dateRange:'8/01/16-12/31/16' },
  {brand: 'Talking Rain', itemName: 'Sparkling Ice Mixed Pack, 170z, 18pk', itemPhoto: require('../Images/iceCase.png'), itemReward:'$0.25 / Case' , description:'Sparkling ICE Q1 Cash Payout, Store must hit 2015 volume threshold to qualify', rewardType:'FLAT', qualifier:'200 Cases' , dateRange:'1/01/16-12/31/16' },
  {brand: 'Hop River' , itemName: 'Light Me Up Lager, 16 oz cans, 6 pk', itemPhoto: require('../Images/hopRiver.png'), itemReward:'$2.00 / Case' , description: ' NEW ITEM LAUNCH!!!  Premium accounts only = BIG PAYOUTS!', rewardType:'TIERED', qualifier:'0 Cases', dateRange:'End of 2016' },
  ])


const Row = ({brand, itemName, itemReward, itemPhoto, description, rewardType, qualifier, dateRange}) => (
    <ItemCard brand={brand} itemName={itemName} itemReward={itemReward} itemPhoto={itemPhoto} description={description} rewardType={rewardType} qualifier={qualifier} dateRange={dateRange} reward1={itemReward}/>
)


const renderRow = (rowData) => (
      <Row brand={rowData.get('brand')}
           itemName={rowData.get('itemName')}
           itemReward={rowData.get('itemReward')}
           itemPhoto={rowData.get('itemPhoto')}
           description={rowData.get('description')}
           rewardType={rowData.get('rewardType')}
           qualifier={rowData.get('qualifier')}
           dateRange={rowData.get('dateRange')}
           reward1={rowData.get('itemReward')}
           />
)



class ItemsList extends Component {
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

export default ItemsList
