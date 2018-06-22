import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('window');

class CustomButtonTouchables extends Component {

    render() {

        return (

            <TouchableOpacity
                onPress={this.props.onPress}
                style={{

                    height: height * 0.0875,
                    marginVertical: height * 0.02,
                    borderWidth: 1,
                    borderColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopRightRadius: this.props.borderRadius || 20,
                    borderTopLeftRadius: this.props.borderRadius || 20,
                    borderBottomRightRadius: this.props.borderRadius || 20,
                    borderBottomLeftRadius: this.props.borderRadius || 20,
                    ...this.props.overrideStyles
                }}>
                <Text style={{

                    fontSize: 24,
                    color: this.props.textColor || 'white',
                    backgroundColor: 'transparent',
                    // fontFamily: 'Nunito',
                }}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }

}

export default CustomButtonTouchables;