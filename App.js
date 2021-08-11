import React, {useEffect} from 'react';
import {I18nManager} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Subscribe from './Screens/Subscribe';
import SignInNextStep from './Screens/SignInNextStep';
import SignIn from './Screens/SignIn';
import HomePage from './Screens/HomePage';
import Card from './Components/Card';
import LogoV2 from './Components/LogoV2';
import Picker from './Components/Picker';
import FavouriteItemScreen from './Screens/FavouriteItemScreen';

const App = () => {
  I18nManager.forceRTL(true);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="HomePage">
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignInNextStep" component={SignInNextStep} />
    <Stack.Screen name="Subscribe" component={Subscribe} />
    <Stack.Screen name="HomePage" component={HomePage} />
    <Stack.Screen name="FavouriteItemScreen" component={FavouriteItemScreen} />
  </Stack.Navigator>
);

export default App;
