const initialState = {

    userNameField: {

        value: '',
        hasError: false,
        errorMessage: ''
    },
    passwordField: {

        value: '',
        hasError: false,
        errorMessage: ''
    },
    isLoading: false
};

const loginReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'TEST::ACTION_CHANGE_TEXT_LOGIN':

            console.log('Changing text login reducer.');

            return {

                ...state,
                userName: '' + action.username,
                password: '' + action.password
            };

        default:
            return state;
    }
};

export default loginReducer;