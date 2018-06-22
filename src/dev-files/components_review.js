import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

class ComponentReview extends Component {

    render() {

        return (
            <View style={styles.container}>

                <CustomTextInput
                    icon={'FontAwesome'}
                    iconName={'user-circle'}
                    placeholder={'User Name'}
                    placeholderColor={'white'}
                    textInputBackgroundColor={'rgba(10,10,10,0.5)'}
                    borderWidth={40}
                    iconStyle={{

                        marginTop: Platform.OS === 'android' ? height * 0.04224 : height * 0.016845,
                        marginLeft: width * 0.03275,
                    }} />

                <CustomTextInput
                    secure
                    icon={'SimpleLineIcons'}
                    iconName={'lock'}
                    placeholder={'Password'}
                    placeholderColor={'white'}
                    textInputBackgroundColor={'rgba(10,10,10,0.5)'}
                    borderWidth={40}
                    iconStyle={{

                        marginTop: Platform.OS === 'android' ? height * 0.04224 : height * 0.014845,
                        marginLeft: width * 0.03275,
                    }} />
                <CustomButtonTouchables
                    onPress={this._requestLogin}
                    title='Login'
                    textColor='white'
                    borderRadius={10} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default ComponentReview;