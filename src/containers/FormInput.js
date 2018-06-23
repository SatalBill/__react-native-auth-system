import React, { Component } from 'react';
import { 
    View,
    Dimensions,
    StyleSheet
} from 'react-native';
import { Font } from 'expo';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

const { height, width } = Dimensions.get('window');

/**
 * @name FormInput.js
 * @type { Stateful Component }
 * @prop { label, secure, onChangeText, placeholderText, hasError, errorMessage }
 * @requires React-Native-Elements
 * @description  This is the component for form fields.
 */

class FormInputX extends Component {

    state = {

        isFontLoaded: false
    };

    componentDidMount = async () => {

        await Font.loadAsync({

            'Nunito': require('../../assets/fonts/Nunito-Regular.ttf'),
        });
        this.setState({ isFontLoaded: true });
    };

    render() {

        return (

            <View style={styles.container}>

                <FormLabel labelStyle={{

                    color: 'white',
                    fontSize: 16,
                    // fontFamily: 'Nunito'
                }}>{this.props.label}</FormLabel>

                {
                    this.state.isFontLoaded ? (

                        <FormInput                        
                                secureTextEntry={this.props.secure || false}
                                placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                                placeholder={this.props.placeholderText}
                                underlineColorAndroid={'white'}
                                inputStyle={{

                                    color: 'white',
                                    fontFamily: 'Nunito'
                                }}
                                containerStyle={{

                                    borderBottomColor: 'white'
                                }}
                                onChangeText={this.props.onChangeText} />

                    ): null
                }
                

                {
                    !this.props.hasError && this.state.isFontLoaded ? (
                        <FormValidationMessage labelStyle={{ color: 'rgba(250, 0, 0, 0.8)', fontFamily: 'Nunito' }}>{this.props.errorMessage}</FormValidationMessage>
                    ) : null
                }          
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        marginVertical: height * 0.01
    }
});

export default FormInputX;