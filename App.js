import SignInNextStep from './Screens/SignInNextStep';
import SplashScreen from 'react-native-splash-screen';
import React, {useEffect} from 'react';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <SignInNextStep />;
};

export default App;
