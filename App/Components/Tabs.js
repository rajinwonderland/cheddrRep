import React from 'react';
import NativeBaseComponent from 'native-base/Components/Base/NativeBaseComponent';
import computeProps from 'native-base/Utils/computeProps';
import DefaulTab from './DefaultTab'

export default class Tabs extends NativeBaseComponent {

    propTypes: {
        style : React.PropTypes.object
    }

    getInitialStyle() {
        return {
            tab: {
                flex: 1
            }
        }
    }

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().tab
        };

        return computeProps(this.props, defaultProps);

    }

    render() {
        return(
            <DefaultTab {...this.prepareRootProps()} >
            {this.props.children}
            </DefaultTab>
        );
    }
}
