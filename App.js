import React, {useEffect} from 'react';
import {I18nManager} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Subscribe from './Screens/Subscribe';
import SignInNextStep from './Screens/SignInNextStep';
import SignIn from './Screens/SignIn';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
  I18nManager.forceRTL(true);
};
const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="SignIn">
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignInNextStep" component={SignInNextStep} />
    <Stack.Screen name="Subscribe" component={Subscribe} />
  </Stack.Navigator>
);

export default App;
