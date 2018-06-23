import React, { Component } from 'react';
import { 
    View,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';

import { Button } from 'react-native-elements';
import Ionicons from '@expo/vector-icons/Ionicons';

const { height, width } = Dimensions.get('window');

class WelcomeScreen extends Component {

    _navigateToLogin = () => {

        this.props.navigation.navigate('LoginScreen');
    };

    _navigateToSignup = () => {

        this.props.navigation.navigate('SignupScreen');
    };

    render() {

        return (
            <View style={styles.container}>

                <Image blurRadius={0} source={require('../../assets/images/mainscreen_background.jpg')} style={styles.backgroundImageStyles} />                

                <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', width: width * 1.0 }}>
                    <Image blurRadius={0} source={require('../../assets/images/tesla-logo.png')} style={styles.companyLogoStyles} />                    
                </View>
                <View style={{

                    flex: 1,
                    width: width * 1.0,
                    backgroundColor: 'transparent',
                    paddingVertical: 16,
                    justifyContent: 'space-around'
                }}>

                    <Button
                        onPress={this._navigateToLogin}
                        title='Login'
                        large
                        iconComponent={Ionicons}
                        icon={{ name: 'ios-checkmark', type: 'ionicon' }}
                        titleStyle={{ fontWeight: '700' }}
                        buttonStyle={{

                            backgroundColor: 'rgba(10,10,10,0.4)',
                            borderColor: '#fff',
                            borderWidth: 0,
                            height: height * 0.09,
                            borderRadius: 10,
                        }}
                        containerStyle={{ marginTop: 20 }}
                    />

                    <Button
                        onPress={this._navigateToSignup}
                        title='Signup'
                        large
                        iconComponent={Ionicons}
                        icon={{ name: 'ios-add', type: 'ionicon' }}
                        titleStyle={{ fontWeight: '700' }}
                        buttonStyle={{

                            backgroundColor: 'rgba(10, 10, 10, 0.4)',
                            borderColor: '#fff',
                            borderWidth: 0,
                            height: height * 0.09,
                            borderRadius: 10,
                            marginTop: height * 0.02,
                            paddingLeft: 36
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
        alignItems: 'center',
        backgroundColor: 'rgba(10, 10, 10, 1)'
    },
    backgroundImageStyles: {

        position: 'absolute',
        // top: height * 0.080,
        height: height * 1.0,
        width: width * 1.0
    },
    companyLogoStyles: {

        height: height * 0.44,
        width: width * 0.60,
        borderTopRightRadius: 80,
        borderTopLeftRadius: 80,
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80
    }
});

export default WelcomeScreen;