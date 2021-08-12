import React, {useEffect} from 'react';
import {I18nManager, Text, Platform, View} from 'react-native';
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
import phoneInput from './Components/PhoneInput';
import ErrorMessage from './Components/ErrorMessage';

import FavouriteItemScreen from './Screens/FavouriteItemScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Background from './Components/Background';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';


const App = () => {
  I18nManager.forceRTL(true);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <TabNavigator />
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

const Chat = () => (
  <Background>
    <Text>The chat screen</Text>
  </Background>
);
const MyOrders = () => (
  <Background>
    <Text>My orders screen</Text>
  </Background>
);
const Settings = () => (
  <Background>
    <Text>My settings screen</Text>
  </Background>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        position: 'absolute',
        bottom: 40,
        marginHorizontal: 20,
        backgroundColor: 'white',
        height: 80,
        borderRadius: 30,
        shadowColor: 'rgba(255,78,54,18)',
        shadowOffset: {height: 7, width: 7},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
      },
    }}>
    <Tab.Screen
      name="HomePAge"
      component={HomePage}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{position: 'absolute', top: '50%'}}>
            <FontAwesome5 name="home" size={20} />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={Chat}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{position: 'absolute', top: '50%'}}>
            <FontAwesome5 name="home" size={20} />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="MyOrders"
      component={MyOrders}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{position: 'absolute', top: '50%'}}>
            <FontAwesome5 name="home" size={20} />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{position: 'absolute', top: '50%'}}>
            <FontAwesome5 name="home" size={20} />
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

export default App;
