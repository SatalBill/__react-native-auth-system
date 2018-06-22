import React, { Component } from 'react';
import { 
    View,
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
                <View style={{

                    width: width * 0.98,
                    // backgroundColor: 'rgba(10,10,10,0.4)',
                    padding: 10
                }}>

                    <Button
                        onPress={this._navigateToLogin}
                        title='Login'
                        large
                        iconComponent={Ionicons}
                        icon={{ name: 'ios-log-in', type: 'ionicon' }}
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

                    <Button
                        onPress={this._navigateToSignup}
                        title='Signup'
                        large
                        iconComponent={Ionicons}
                        icon={{ name: 'ios-add', type: 'ionicon' }}
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

export default WelcomeScreen;