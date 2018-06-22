const initialState = {

    fetchSuccess: false,
    fetchError: false,
    isLoaded: false
};

const asyncReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'TEST::ACTION_REQUEST':
            
            console.log('IS loaded set to true.');

            return {

                ...state,
                isLoaded: true
            };
    
        default:
            return state;
    }
};

export default asyncReducer;