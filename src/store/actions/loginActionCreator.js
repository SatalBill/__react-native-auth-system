export const usernameChangedHandler = (usernameValue) => {

    return {

        action: 'LOGIN_USERNAME_TEXTINPUT::CHANGED',
        usernameValue
    };
};

export const passwordChangedHandler = (passwordValue) => {

    return {

        action: 'LOGIN_PASSWORD_TEXTINPUT::CHANGED',
        passwordValue
    };
};