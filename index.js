/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider, useSelector,connect} from 'react-redux';
import Store from './src/redux/store';

const Root = () => (
    <Provider store={Store}>
      <App />
    </Provider>
  )


AppRegistry.registerComponent(appName, () => Root);
