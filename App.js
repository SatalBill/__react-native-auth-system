import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore'
import LoginAppNavigator from './src/config/routes';

const store = configureStore();

export default class App extends React.Component {

  render() {

    return (
     <Provider store={store}>
        <LoginAppNavigator />
     </Provider>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
