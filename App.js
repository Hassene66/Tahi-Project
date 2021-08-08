import React, {useEffect} from 'react';
import {I18nManager} from 'react-native';
import SignIn from './Screens/SignIn';
import SignInNextStep from './Screens/SignInNextStep';
import Subscribe from './Screens/Subscribe';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  I18nManager.forceRTL(true);
  return <Subscribe />;
};

export default App;
