import React from 'react';
import NativeBaseComponent from 'native-base/Components/Base/NativeBaseComponent';
import Text from 'native-base/Components/Widgets/Text';

import {
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  View,
  Animated,
} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default class DefaultTab extends NativeBaseComponent {
    getInitialStyle() {
        return {
            tab: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fdb729'
            },
            tabs: {
                height: 45,
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderWidth: 1,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderBottomColor: '#ccc',
            }
        }
    }
    static propTypes = {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array
    }

  renderTabOption(name, page) {
    var isTabActive = this.props.activeTab === page;

    return (
      <TouchableHighlight underlayColor={this.getTheme().darkenHeader} style={[this.getInitialStyle().tab]} key={name} onPress={() => this.props.goToPage(page)}>
        <View>
          <Text style={{color: isTabActive ? this.getTheme().tabTextColor : this.getTheme().tabTextColor, fontSize: this.getTheme().tabFontSize}}>{name}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    var numberOfTabs = this.props.tabs.length;
    var tabUnderlineStyle = {
      position: 'absolute',
      width: deviceWidth / numberOfTabs,
      height: 0,
      backgroundColor: this.getTheme().tabTextColor,
      bottom: 0,
    };

    var left = this.props.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [0, deviceWidth / numberOfTabs]
    });

    return (
      <View style={this.getInitialStyle().tabs}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        <Animated.View style={[tabUnderlineStyle, {left}]} />
      </View>
    );
  }
}
