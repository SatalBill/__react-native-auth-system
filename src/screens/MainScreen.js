import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Font } from 'expo';

const { height, width } = Dimensions.get('window');

/**
 * @name MainScreen.js
 * @type { Stateful Component }
 * @prop { none }
 * @description  This is the component for main screen of the app. Can be modified accordingly.
 */

class MainScreen extends Component {

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

                {
                    this.state.isFontLoaded ? (

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(10, 10, 10, 0.4)' }}>
                            <Image blurRadius={0} source={require('../../assets/images/mainscreen_background.jpg')} style={styles.backgroundImageStyles} />

                            <Text style={{ color: 'white',
                                           fontFamily: 'Nunito',
                                           fontSize: 48
                            }}>MainScreen</Text>
                        </View>

                    ) : null
                }
                
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex:1
    },
    backgroundImageStyles: {

        position: 'absolute',
        height: height * 1.0,
        width: width * 1.0
    }
});

export default MainScreen;