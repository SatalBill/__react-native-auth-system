import React, { Component } from 'react';
import { 
    View,
    Text,
    Dimensions,
    Platform,
    StyleSheet
} from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import CustomTextInput from '../containers/CustomTextInput';
import CustomButtonTouchables from '../containers/CustomButtonTouchables';
import CustomFormInput from '../containers/CustomFormInput';

const { height, width } = Dimensions.get('window');

class LoginScreen extends Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={{

                    width: width * 0.98,
                    padding: 10,
                    backgroundColor: 'transparent',
                }}>

                
                    <CustomFormInput
                        label={'Username'} 
                        placeholderText={'Enter your username'} 
                        hasError errorMessage={'Not Correct'} />

                    <CustomFormInput 
                        secure
                        label={'Password'} 
                        placeholderText={'Enter your password'} 
                        hasError errorMessage={'Not Correct'} />
                        
                    <Button
                        title='Loging In'
                        large
                        loading
                        loadingProps={{ size: 'large', color: 'rgba(111, 202, 186, 1)' }}
                        titleStyle={{ fontWeight: '700' }}
                        buttonStyle={{

                            backgroundColor: 'rgba(92, 99,216, 1)',
                            borderColor: '#fff',
                            borderWidth: 0,
                            borderRadius: 10,
                            marginTop: height * 0.02                            
                        }}
                        containerStyle={{ marginTop: 20 }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgba(10,10,10,1)'
    }
});

export default LoginScreen;