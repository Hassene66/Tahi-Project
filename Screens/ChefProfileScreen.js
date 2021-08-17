import React, {useState} from 'react';
import {Text, View, I18nManager, Dimensions} from 'react-native';

import Background from '../Components/Background';
import ChefProfileContact from '../Components/ChefProfileContact';
import ChefInfo from '../Components/ChefInfo';
import ListingItemSeperator from '../Components/ListingItemSeperator';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomChefNavigation from '../Components/CustomChefNavigation';
import FoodPhotos from '../Components/FoodPhotos';
import Evaluation from '../Components/Evaluation';
import About from '../Components/About';
const ChefProfileScreen = () => {
  I18nManager.allowRTL(false);
  const ChefData = {
    id: 1,
    name: 'علي عبد الله',
    place: 'مكه المكرمة',
    location: 'منطقة باب المنارة',
    numberOfRequests: 15,
    rating: '3.2',
    liked: false,
  };
  const [chefData, setChefData] = useState(ChefData);
  const setIsLiked = () => {
    setChefData({...chefData, liked: !chefData.liked});
  };

  const Tab = createMaterialTopTabNavigator();

  return (
    <Background isInverted>
      <ChefProfileContact />
      <ListingItemSeperator height={45} />
      <ChefInfo
        data={chefData}
        isRecent={false}
        isLiked={chefData.liked}
        setLiked={setIsLiked}
        withBorder
      />
      <Tab.Navigator
        tabBar={props => <CustomChefNavigation {...props} />}
        tabBarOptions={{
          showLabel: false,
        }}
        swipeVelocityImpact={0.4}
        sceneContainerStyle={{
          backgroundColor: 'transparent',
        }}
        backBehavior="history"
        initialRouteName="FoodPhoto">
        <Tab.Screen name="FoodPhoto" component={FoodPhotos} />
        <Tab.Screen name="Evaluation" component={Evaluation} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </Background>
  );
};

export default ChefProfileScreen;
