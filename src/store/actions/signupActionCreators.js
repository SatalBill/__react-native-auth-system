import * as signupForm from '../../util/SignupFormValidation';

export const usernameChangedHandler = (usernameValue) => {

    return {

        type: 'USERNAME_TEXTINPUT::CHANGED',
        usernameValue
    };
};

export const emailChangedHandler = (emailValue) => {

    return {

        type: 'EMAIL_TEXTINPUT::CHANGED',
        emailValue
    };
};

export const passwordChangedHandler = (passwordValue) => {

    
    return {

        type: 'PASSWORD_TEXTINPUT::CHANGED',
        passwordValue
    };
};

export const confirmPasswordChangedHandler = (confirmPasswordValue) => {

    return {

        type: 'CONFIRMPASSWORD_TEXTINPUT::CHANGED',
        confirmPasswordValue
    };
};

export const initLoadingHandler = () => {

    return {

        type: 'SIGNUP_BUTTON::STATE_LOADING_START'
    };
};

export const initSignupHandler = (state, navigation) => {

    return dispatch => {

        let { userNameField, emailField, passwordField } = state;

        let userData = {

            username: userNameField.value,
            email: emailField.value,
            password: passwordField.value
        }

        console.log(userData);

        fetch('http://localhost:3000/register', {

            method: 'POST',
            headers: {

                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(e => console.log(e));

        setTimeout(() => {
            dispatch({

                type: 'SIGNUP_BUTTON::PRESSED'
            });
            navigation.navigate('MainScreen');
        }, 4000);
    };
};