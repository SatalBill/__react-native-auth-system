import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    Dimensions,
    Platform,
    StyleSheet
} from 'react-native';
import { Font } from 'expo';
import { Button } from 'react-native-elements';
import FormInput from '../containers/FormInput';

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
                        placeholderText={'Enter your username'} 
                        hasError errorMessage={'Not Correct'} />

                    <FormInput 
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

export default LoginScreen;