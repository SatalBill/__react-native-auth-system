import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { Font } from 'expo';
import { Button } from 'react-native-elements';
import FormInput from '../containers/FormInput';
import { usernameChangedHandler,
         emailChangedHandler,
         passwordChangedHandler,
         confirmPasswordChangedHandler,
         initSignupHandler,
         initLoadingHandler } from '../store/actions/signupActionCreators';

const { height, width } = Dimensions.get('window');

class SignupScreen extends Component {

    state = {

        isFontLoaded: false
    };

    componentDidMount = async () => {
        
        await Font.loadAsync({

            'Nunito': require('../../assets/fonts/Nunito-Regular.ttf'),
        });
        this.setState({ isFontLoaded: true });
    };

    _signupButtonPressed = () => {

        this.props.initLoading();
        this.props.initSignup(this.props.localState, this.props.navigation);
    };

    render() {

        return (

            
            <View style={styles.container}>
                
                <Image blurRadius={0} source={require('../../assets/images/mainscreen_background.jpg')} style={styles.backgroundImageStyles} />
                <ScrollView>
                <View style={{

                    flex: 1,
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                  {
                      this.state.isFontLoaded ? (

                        <Text style={{ marginTop: height * 0.04, fontFamily: 'Nunito', fontSize: 72, color: 'white' }}>
                        Sign up
                        </Text>
                      ) : null
                  }  
                </View>
                <View style={{

                    flex: 4,
                    width: width * 0.98,
                    padding: 10,
                    backgroundColor: 'transparent'
                }}>

                    <FormInput
                        label={'Username'}
                        onChangeText={(text) => this.props.usernameChanged(text)}
                        placeholderText={'Enter your username'}
                        hasError={this.props.localState.userNameField.isValid}
                        errorMessage={this.props.localState.userNameField.errorMessage}
                        />

                    <FormInput
                        label={'Email'}
                        onChangeText={(text) => this.props.emailChanged(text)}
                        placeholderText={'Enter your e-mail'}
                        hasError={this.props.localState.emailField.isValid}
                        errorMessage={this.props.localState.emailField.errorMessage}
                        />

                    <FormInput
                        secure
                        label={'Password'}
                        onChangeText={(text) => this.props.passwordChanged(text)}                        
                        placeholderText={'Enter your password'}
                        hasError={this.props.localState.passwordField.isValid}
                        errorMessage={this.props.localState.passwordField.errorMessage}
                        />

                    <FormInput
                        secure
                        label={'Confirm Password'}
                        onChangeText={(text) => this.props.confirmPasswordChanged(text)}                        
                        placeholderText={'Confirm your password'}
                        hasError={this.props.localState.confirmPasswordField.isValid}                        
                        errorMessage={this.props.localState.confirmPasswordField.errorMessage}                        
                        />

                    <Button
                        title={this.props.localState.buttonLabel}
                        onPress={this._signupButtonPressed}
                        large
                        disabled={this.props.localState.buttonDisabled}
                        loading={this.props.localState.isLoading}
                        loadingProps={{ size: 'large', color: 'rgba(111, 202, 186, 1)' }}
                        titleStyle={{ fontWeight: '700' }}
                        buttonStyle={{

                            backgroundColor: 'rgba(10, 10, 10,  0.4)',
                            borderColor: '#fff',
                            borderWidth: 0,
                            borderRadius: 10,
                            marginTop: height * 0.04
                        }} />
                </View>
                </ScrollView>
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
    },
    backgroundImageStyles: {

        position: 'absolute',
        height: height * 1.0,
        width: width * 1.0
    }
});

const mapStateToProps = (state) => {

    return {

        localState: state.signupData
    };
};

const mapDispatchToProps = (dispatch) => {

    return {

        usernameChanged: (value) => dispatch(usernameChangedHandler(value)),
        emailChanged: (value) => dispatch(emailChangedHandler(value)),
        passwordChanged: (value) => dispatch(passwordChangedHandler(value)),
        confirmPasswordChanged: (value) => dispatch(confirmPasswordChangedHandler(value)),
        initSignup: (state, navigation) => dispatch(initSignupHandler(state, navigation)),
        initLoading: () => dispatch(initLoadingHandler())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);