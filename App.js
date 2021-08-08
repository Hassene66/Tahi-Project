import React, {useEffect} from 'react';
import {I18nManager} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
  <Stack.Navigator initialRouteName="SignIn">
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="SignInNextStep"
      component={SignInNextStep}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default App;
