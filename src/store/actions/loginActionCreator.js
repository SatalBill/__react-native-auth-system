export const usernameChangedHandler = (usernameValue) => {

    return {

        type: 'LOGIN_USERNAME_TEXTINPUT::CHANGED',
        usernameValue
    };
};

export const passwordChangedHandler = (passwordValue) => {

    return {

        type: 'LOGIN_PASSWORD_TEXTINPUT::CHANGED',
        passwordValue
    };
};

export const initLoadingHandler = () => {

    return {

        type: 'LOGIN_BUTTON::STATE_LOADING_START'
    };
};

export const initLoginHandler = (userdata, navigation) => {

    return dispatch => {

        console.log(userdata);
        
        setTimeout(() => {
            
            dispatch({ type: 'LOGIN_BUTTON::PRESSED' });
            navigation.navigate('MainScreen');
        }, 2000);
    };
};