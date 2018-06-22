import * as signupForm from '../../util/SignupFormValidation';

const initialState = {

    userNameField: {

        value: '',
        isValid: true,
        errorMessage: 'username is not valid'
    },
    emailField: {

        value: '',
        isValid: true,
        errorMessage: 'email is not valid'
    },
    passwordField: {

        value: '',
        isValid: true,
        errorMessage: 'password is too short'
    },
    confirmPasswordField: {

        value: '',
        isValid: true,
        errorMessage: 'passwords do not match'
    },
    buttonLabel: 'Signup',
    buttonDisabled: true,
    isLoading: false
};

const signupDetailsReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'USERNAME_TEXTINPUT::CHANGED':

            console.log('USERNAME VALID: ' + signupForm.isUsernameValid(action.usernameValue));

            return {

                ...state,
                 userNameField: {

                    ...state.userNameField,
                    value: action.usernameValue,
                    isValid: signupForm.isUsernameValid(action.usernameValue)
                 },
                buttonDisabled: signupForm.isFormValid({

                    ...state,
                    userNameField: {

                        ...state.userNameField,
                        value: action.usernameValue,
                        isValid: signupForm.isUsernameValid(action.usernameValue)
                    }
                })      
            };

        case 'EMAIL_TEXTINPUT::CHANGED':

            console.log('EMAIL VALID: ' + signupForm.isEmailValid(action.emailValue));      

            return {

                ...state,
                emailField: {

                    ...state.emailField,
                    value: action.emailValue,
                    isValid: signupForm.isEmailValid(action.emailValue)
                },
                buttonDisabled: signupForm.isFormValid({

                    ...state,
                    emailField: {

                        ...state.emailField,
                        value: action.emailValue,
                        isValid: signupForm.isEmailValid(action.emailValue)
                    }
                })                      
            };

        case 'PASSWORD_TEXTINPUT::CHANGED':

            return {

                ...state,
                passwordField: {

                    ...state.passwordField,
                    value: action.passwordValue,
                    isValid: signupForm.isPasswordValid(action.passwordValue)
                },
                buttonDisabled: signupForm.isFormValid({
                    
                    ...state,
                    passwordField: {

                        ...state.passwordField,
                        value: action.passwordValue,
                        isValid: signupForm.isPasswordValid(action.passwordValue)
                    }
                })                      
            };

        case 'CONFIRMPASSWORD_TEXTINPUT::CHANGED':

            console.log('DO PASS MATCH :', signupForm.doPasswordMatch(state.passwordField.value, action.confirmPasswordValue));

            return {

                ...state,
                confirmPasswordField: {

                    ...state.confirmPasswordField,
                    value: action.confirmPasswordValue,
                    isValid: signupForm.doPasswordMatch(state.passwordField.value, action.confirmPasswordValue)
                },
                buttonDisabled: signupForm.isFormValid({
                    
                    ...state,
                    confirmPasswordField: {

                        ...state.confirmPasswordField,
                        value: action.confirmPasswordValue,
                        isValid: signupForm.doPasswordMatch(state.passwordField.value, action.confirmPasswordValue)
                    }
                })                
            };

        case 'SIGNUP_BUTTON::STATE_LOADING_START':

            return {

                ...state,
                isLoading: true,
                buttonLabel: 'Signing Up',                
            };

        default:
            return state;
    }
};

export default signupDetailsReducer;