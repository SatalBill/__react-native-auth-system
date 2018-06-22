import React from 'react';
import { Platform, Animated, Easing, Dimensions, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import MainScreen from '../screens/MainScreen';

const transitionConfig = () => {

    return {

        transitionSpec: {

            duration: 400, // TODO: adjust for production.
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {

            const { layout, position, scene } = sceneProps;

            const thisSceneIndex = scene.index;
            const width = layout.initWidth;

            const translateX = position.interpolate({

                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            });

            return { transform: [{ translateX }] };
        },
    };
};

const LoginAppNavigator = new createStackNavigator({

    WelcomeScreen: {

        screen: WelcomeScreen
    },
    LoginScreen: {

        screen: LoginScreen
    },
    SignupScreen: {

        screen: SignupScreen
    },
    MainScreen: {

        screen: MainScreen
    }

}, {

    headerMode: 'none', // StackNavigator header.
    navigationOptions: {

        gesturesEnabled: true
    },
    transitionConfig
});

export default LoginAppNavigator;