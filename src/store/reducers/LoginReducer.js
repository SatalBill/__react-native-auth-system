import * as formValidation from '../../util/FormValidation';

const initialState = {

    userNameField: {

        value: '',
        isValid: true,
        errorMessage: 'username is not valid'
    },
    passwordField: {

        value: '',
        isValid: true,
        errorMessage: ''
    },
    buttonLabel: 'Login',
    isLoading: false
};

const loginReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'LOGIN_USERNAME_TEXTINPUT::CHANGED':

            return {

                ...state,
                userNameField: {

                    ...state.userNameField,
                    value: action.usernameValue,
                    isValid: formValidation.isUsernameValid(action.usernameValue)
                }
            };

        case 'LOGIN_PASSWORD_TEXTINPUT::CHANGED':

            return {

                ...state,
                passwordField: {

                    ...state.passwordField,
                    value: action.passwordValue,
                    isValid: formValidation.isPasswordValid(action.passwordValue)
                }
            };

        case 'LOGIN_BUTTON::STATE_LOADING_START':

            return {

                ...state,
                isLoading: true,
                buttonLabel: 'Loging Up'
            };

        case 'LOGIN_BUTTON::PRESSED':

            // Handle login action here.

            return {

                ...state,
                isLoading: false,
                buttonLabel: 'Login Up'
            };

        case 'RESET::APPLICATION_DATA':

            // Reset login form data.

            return {

                ...initialState
            };

        default:
            return state;
    }
};

export default loginReducer;