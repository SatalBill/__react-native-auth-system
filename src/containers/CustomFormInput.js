import React, { Component } from 'react';
import { 
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

const { height, width } = Dimensions.get('window');

class CustomFormInput extends Component {

    render() {
        // TODO: Connect form error management.
        return (
            <View style={styles.container}>

                <FormLabel style={{
                    color: 'white'
                }}>{this.props.label}</FormLabel>
                <FormInput 
                    secureTextEntry={this.props.secure || false}
                    placeholderTextColor={'rgba(255,255,255,0.4)'} 
                    placeholder={this.props.placeholderText} style={{

                    color: 'white',
                    fontSize: 22
                }} onChangeText={this.props.onChangeText} />
                
                {
                    this.props.hasError === false ? (
                        <FormValidationMessage>{this.props.errorMessage}</FormValidationMessage>
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

export default CustomFormInput;