import React from 'react';
import {I18nManager} from 'react-native';
import SignIn from './Screens/SignIn';
import SignInNextStep from './Screens/SignInNextStep';
import Subscribe from './Screens/Subscribe';
const App = () => {
  I18nManager.forceRTL(true);
  return <Subscribe />;
};

export default App;
