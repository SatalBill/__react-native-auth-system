const initialState = {

    fetchSuccess: false,
    fetchError: false,
    isLoaded: false
};

const asyncReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ASYNC::FETCH':

            // Sample action for your application.

            return {

                ...state,
                isLoaded: true
            };
        case 'RESET::APPLICATION_DATA': 

            // Reset application data.
            return {

                ...initialState
            };

        default:
            return state;
    }
};

export default asyncReducer;