import React, { Component } from 'react';
import { 
    View,
    Text,
    TextInput,
    Dimensions,
    Platform,
    StyleSheet
} from 'react-native';

import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

class CustomTextInput extends Component {

    render() {

        let iconComponent = null;

        if(this.props.icon === 'FontAwesome') {

           iconComponent = <FontAwesome name={this.props.iconName} size={Platform.OS === 'android' ? 28 : 30} style={[styles.iconStyle, this.props.iconStyle]} />
        } else if(this.props.icon === 'SimpleLineIcons') {

            iconComponent = <SimpleLineIcons name={this.props.iconName} size={Platform.OS === 'android' ? 28 : 30} style={[styles.iconStyle, this.props.iconStyle]} />            
        }



        return (
            <View style={{

                marginVertical: height * 0.01
            }}>
                {
                    iconComponent
                }
                <TextInput
                    secureTextEntry={this.props.secure || false}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={this.props.placeholderColor || 'white'}
                    underlineColorAndroid={this.props.underlineColor || 'transparent'}
                    onChangeText={this.props.onTextChanged}
                    style={{

                        color: 'white',
                        fontSize: Platform.OS === 'android' ? 21 : 22,
                        fontFamily: Platform.OS === 'android' ? 'Nunito' : undefined,
                        backgroundColor: this.props.textInputBackgroundColor || 'rgba(10,10,10,0.5)',
                        paddingHorizontal: 10,
                        paddingVertical: Platform.OS === 'android' ? 8 : 12,
                        paddingLeft: 54,
                        borderTopRightRadius: this.props.borderWidth,
                        borderTopLeftRadius: this.props.borderWidth,
                        borderBottomRightRadius: this.props.borderWidth,
                        borderBottomLeftRadius: this.props.borderWidth,
                        ...this.props.textInputStyle
                    }}
                />
                </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    iconStyle: {
        color: 'white',
        position: 'absolute',
        zIndex: 10
    }
});

export default CustomTextInput;