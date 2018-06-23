import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore'
import LoginAppNavigator from './src/config/routes';

const store = configureStore();

/**
 * @name App.js
 * @type { Stateful Component }
 * @author KARAN PRATAP SINGH
 * @requires Expo,Redux,React-Navigation
 * @description This is a ready to use login system app/boilerplate with
 *              full redux integration to get your project started.
 */

export default class App extends React.Component {

  render() {

    return (
     <Provider store={store}>
        <LoginAppNavigator />
     </Provider>
    );
  }
}