import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import store from 'shared/store';
import AlertSnackBar from 'shared/components/AlertSnackBar';
import AuthNavigator from './app/AuthNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <AuthNavigator />
      <AlertSnackBar />
    </Provider>
  );
}
