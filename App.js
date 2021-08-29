import React, {useEffect} from 'react';
import {I18nManager, LogBox, View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Subscribe from './Screens/SubscribeScreen';
import SignInNextStep from './Screens/SignInNextStepScreen';
import SignIn from './Screens/SignInScreen';
import HomePage from './Screens/HomePageScreen';
import Card from './Components/Card';
import LogoV2 from './Components/LogoV2';
import Picker from './Components/Picker';
import ErrorMessage from './Components/ErrorMessage';

import FavouriteItemScreen from './Screens/FavouriteItemScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Background from './Components/Background';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Search from './Screens/SearchScreen';
import CustomTabBar from './Components/CustomTabBar';
import ChefProfileScreen from './Screens/ChefProfileScreen';
import DishesDetails from './Components/DishesDetails';
import AddOrderScreen from './Screens/AddOrderScreen';

const App = () => {
  I18nManager.forceRTL(true);
  useEffect(() => {
    SplashScreen.hide();
    LogBox.ignoreLogs([
      'isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.',
      'VirtualizedLists should never be nested',
    ]);
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
    initialRouteName="AddOrder">
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignInNextStep" component={SignInNextStep} />
    <Stack.Screen name="Subscribe" component={Subscribe} />
    <Stack.Screen name="HomePage" component={TabNavigator} />
    <Stack.Screen name="FavouriteItemScreen" component={FavouriteItemScreen} />
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen name="CustomTabBar" component={CustomTabBar} />
    <Stack.Screen name="ChefProfile" component={ChefProfileScreen} />
    <Stack.Screen name="DishesDetails" component={DishesDetails} />
    <Stack.Screen name="AddOrder" component={AddOrderScreen} />
  </Stack.Navigator>
);

const ChatScreen = () => (
  <Background isInverted>
    <Text>the chat Screen</Text>
  </Background>
);
const OrderScreen = () => (
  <Background isInverted>
    <Text>the oder Screen</Text>
  </Background>
);
const AccountScreen = () => (
  <Background isInverted>
    <Text>the Account Screen</Text>
  </Background>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBar={props => (
      <View style={{backgroundColor: '#FEE4D7'}}>
        <CustomTabBar {...props} />
      </View>
    )}
    tabBarOptions={{
      showLabel: false,
    }}>
    <Tab.Screen
      name="HomeScreen"
      component={HomePage}
      options={{
        tabBarIcon: ({color, size}) => (
          <FontAwesome5 name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="chatScreen"
      component={ChatScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <FontAwesome5 name="comment-alt" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="orderScreen"
      component={OrderScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <FontAwesome5 name="newspaper" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="AccountScreen"
      component={AccountScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <FontAwesome5 name="user" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default App;
