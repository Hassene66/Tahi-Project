import React, {useEffect} from 'react';
import {I18nManager, YellowBox, Platform, View} from 'react-native';
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
import ErrorMessage from './Components/ErrorMessage';

import FavouriteItemScreen from './Screens/FavouriteItemScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Background from './Components/Background';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import Search from './Screens/Search';

const App = () => {
  I18nManager.forceRTL(true);
  useEffect(() => {
    SplashScreen.hide();
    console.warn = () => {};
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
    initialRouteName="Subscribe">
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignInNextStep" component={SignInNextStep} />
    <Stack.Screen name="Subscribe" component={Subscribe} />
    <Stack.Screen name="HomePage" component={HomePage} />
    <Stack.Screen name="FavouriteItemScreen" component={FavouriteItemScreen} />
    <Stack.Screen name="Search" component={Search} />
  </Stack.Navigator>
);

export default App;
