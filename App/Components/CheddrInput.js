import React, { PropTypes, Component } from 'react';
import {
  Animated,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native';

import BaseInput from 'react-native-textinput-effects/lib/BaseInput';

const PADDING = 16;

export default class CheddrInput extends BaseInput {

  static propTypes = {
    borderColor: PropTypes.string,

    /*
     * this is used to set backgroundColor of label mask.
     * this should be replaced if we can find a better way to mask label animation.
     */
    backgroundColor: PropTypes.string,
    height: PropTypes.number,
  };

  static defaultProps = {
    borderColor: 'transparent',
    height: 28,
  };

  render() {
    const {
      label,
      style: containerStyle,
      inputStyle,
      labelStyle,
      backgroundColor: maskColor,
      borderColor,
      height: inputHeight,
    } = this.props;
    const {
      width,
      focusedAnim,
      value,
    } = this.state;

    return (
      <View
        style={[containerStyle, styles.container, {
          height: inputHeight + PADDING,
          width: 175,
        }]}
        onLayout={this._onLayout}
      >
        <TextInput
          ref="input"
          {...this.props}
          style={[styles.textInput, inputStyle, {
            width,
            height: inputHeight,
          }]}
          value={value}
          onBlur={this._onBlur}
          onChange={this._onChange}
          onFocus={this._onFocus}
          keyboardType={'numeric'}
          underlineColorAndroid={'transparent'}
        />
        <TouchableWithoutFeedback onPress={this._focus}>
          <Animated.View style={[styles.labelContainer, {
            opacity: focusedAnim.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [1, 0, 1],
            }),
            top: focusedAnim.interpolate({
              inputRange: [0, 0.5, 0.51, 1],
              outputRange: [24, 24, 0, 0],
            }),
            left: focusedAnim.interpolate({
              inputRange: [0, 0.5, 0.51, 1],
              outputRange: [PADDING, 2 * PADDING, 0, PADDING],
            }),
          }]}>
            <Text style={[styles.label, labelStyle]}>
              {label}
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        <View style={[styles.labelMask, { backgroundColor: maskColor }]} />
        <Animated.View
          style={[styles.border, {
            width: focusedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, width],
            }),
            backgroundColor: 'transparent',
          }]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#777',

  },
  labelContainer: {
    position: 'absolute',
  },
  label: {
    fontSize: 12,
    color: '#777',
    fontWeight: "600",
  },
  textInput: {
    position: 'absolute',
    bottom: 2,
    left: PADDING,
    padding: 0,
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },
  labelMask: {
    height: 25,
    width: PADDING,
  },
  border: {
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
  },
});