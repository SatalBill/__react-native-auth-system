import { createStore, combineReducers, applyMiddleware } from 'redux';

import AsyncReducer from './reducers/AsyncReducer';
import LoginReducer from './reducers/LoginReducer';
import SignupReducer from './reducers/SignupReducer';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
 
    asyncData: AsyncReducer,
    loginData: LoginReducer,
    signupData: SignupReducer
});

const configureStore = () => {

    return createStore(rootReducer, applyMiddleware(createLogger(), thunk));
};

export default configureStore;