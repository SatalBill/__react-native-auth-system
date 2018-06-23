import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    Dimensions,
    Platform,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { Font } from 'expo';
import { Button } from 'react-native-elements';
import FormInput from '../containers/FormInput';
import { usernameChangedHandler,
         passwordChangedHandler,
         initLoadingHandler,
         initLoginHandler } from '../store/actions/loginActionCreator';

const { height, width } = Dimensions.get('window');

class LoginScreen extends Component {

    state = {

        isFontLoaded: false
    };

    componentDidMount = async () => {

        await Font.loadAsync({

            'Nunito': require('../../assets/fonts/Nunito-Regular.ttf'),
        });
        this.setState({ isFontLoaded: true });
    };

    _loginButtonPressed = () => {

        let { userNameField, passwordField } = this.props.localState;

        this.props.initLoading();
        this.props.initLogin({ username: userNameField.value, password: passwordField.value}, this.props.navigation);
    };

    render() {

        return (
            <View style={styles.container}>
            
                <Image blurRadius={0} source={{ uri: 'https://stmed.net/sites/default/files/turquoise-blur-wallpapers-25329-9997933.jpg' }} style={styles.backgroundImageStyles} />

                <View style={{

                    flex: 1,
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {
                        this.state.isFontLoaded ? (

                            <Text style={{ marginTop: height * 0.04, fontFamily: 'Nunito', fontSize: 64, color: 'white' }}>
                                Login
                            </Text>
                        ) : null
                    }
                </View>

                <View style={{

                    flex: 4,
                    width: width * 0.98,
                    padding: 10,
                    backgroundColor: 'transparent',
                }}>

                
                    <FormInput
                        label={'Username'}
                        onChangeText={(text) => this.props.usernameChanged(text)}
                        placeholderText={'Enter your username'}
                        hasError={this.props.localState.userNameField.isValid}
                        errorMessage={this.props.localState.userNameField.errorMessage}
                    />

                    <FormInput
                        secure
                        label={'Password'}
                        onChangeText={(text) => this.props.passwordChanged(text)}
                        placeholderText={'Enter your password'}
                        hasError={this.props.localState.passwordField.isValid}
                        errorMessage={this.props.localState.passwordField.errorMessage}
                    />
                        
                    <Button
                        title='Log In'
                        onPress={this._loginButtonPressed}
                        large
                        loading={this.props.localState.isLoading}
                        loadingProps={{ size: 'large', color: 'rgba(111, 202, 186, 1)' }}
                        titleStyle={{ fontWeight: '700' }}
                        buttonStyle={{

                            // backgroundColor: 'rgba(92, 99,216, 1)',
                            backgroundColor: 'rgba(10, 10, 10,  0.4)',
                            borderColor: '#fff',
                            borderWidth: 0,
                            borderRadius: 10,
                            marginTop: height * 0.06                            
                        }} />
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
    },
    backgroundImageStyles: {

        position: 'absolute',
        // top: height * 0.080,
        height: height * 1.0,
        width: width * 1.0
    }
});

const mapStateToProps = (state) => {

    return {

        localState: state.loginData
    };
};

const mapDispatchToProps = (dispatch) => {

    return {

        usernameChanged: (value) => dispatch(usernameChangedHandler(value)),
        passwordChanged: (value) => dispatch(passwordChangedHandler(value)),
        initLogin: (userdata, navigation) => dispatch(initLoginHandler(userdata, navigation)),
        initLoading: () => dispatch(initLoadingHandler())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);