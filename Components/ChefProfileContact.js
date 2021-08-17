import React from 'react';
import {View} from 'react-native';
import PreviousPageNavigation from '../Components/PreviousPageNavigation';
import NavigationButton from '../Components/NavigationButton';

const ChefProfileContact = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
      }}>
      <View>
        <PreviousPageNavigation />
      </View>

      <View
        style={{
          alignItems: 'space-between',
          flexDirection: 'row',
          width: '55%',
          justifyContent: 'space-evenly',
        }}>
        <NavigationButton
          iconName="comment-alt"
          gradientColor={['#FF6921', '#FFA23C', '#FFD051']}
          iconStyle={{marginHorizontal: 20}}
          iconType="message"
        />

        <NavigationButton
          gradientColor={['#28B228', '#4FCE4D', '#74E76E']}
          iconName="phone"
          iconType="phone"
        />
        <NavigationButton
          gradientColor={['#ECEBEA', '#ECEBEA', '#ECEBEA']}
          iconName="ellipsis-v"
          color="black"
          iconType="plus"
        />
      </View>
    </View>
  );
};

export default ChefProfileContact;
