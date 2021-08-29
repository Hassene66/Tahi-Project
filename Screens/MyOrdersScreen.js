import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomChefNavigation from '../Components/CustomChefNavigation';
import Background from '../Components/Background';
import LogoV3 from '../Components/LogoV3';

const MyOrdersScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  const PendingOrderScreen = () => (
    <View>
      <Text>Pending Order Screen</Text>
    </View>
  );
  const AcceptedOrderScreen = () => (
    <View>
      <Text>Accepted Order Screen</Text>
    </View>
  );
  const CompletedOrderScreen = () => (
    <View>
      <Text>Completed Order Screen</Text>
    </View>
  );
  return (
    <Background isInverted>
      <LogoV3 />
      <Tab.Navigator
        tabBar={props => (
          <CustomChefNavigation
            {...props}
            PagesName={['في الإنتظار', 'مقبول', 'منتهية']}
          />
        )}
        tabBarOptions={{
          showLabel: false,
        }}
        swipeVelocityImpact={0.4}
        sceneContainerStyle={{
          backgroundColor: 'transparent',
        }}
        backBehavior="history"
        initialRouteName="PendingOrderScreen">
        <Tab.Screen
          name="PendingOrderScreen"
          children={() => <PendingOrderScreen />}
        />
        <Tab.Screen
          name="AcceptedOrderScreen"
          children={() => <AcceptedOrderScreen />}
        />
        <Tab.Screen
          name="CompletedOrderScreen"
          children={() => <CompletedOrderScreen />}
        />
      </Tab.Navigator>
    </Background>
  );
};

export default MyOrdersScreen;
