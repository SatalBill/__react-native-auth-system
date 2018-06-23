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