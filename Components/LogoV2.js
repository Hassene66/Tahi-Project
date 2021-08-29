import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import Logo from './Logo';
import RoundIcon from './RoundIcon';

const LogoV2 = ({navigation}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          paddingTop: 12,
          width: 80,
          height: 60,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Logo marginTP={0} WIDTH={30} HEIGHT={30} isSmall />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <RoundIcon
          title="bell"
          solid
          size={18}
          color="#464646"
          bgColor="#EDEBEB"
          marginHorizontal={5}
          withShadow={false}
        />
        <RoundIcon
          title="search"
          solid
          size={18}
          color="#464646"
          bgColor="#EDEBEB"
          marginHorizontal={5}
          pageName="Search"
          withShadow={false}
        />

        <RoundIcon
          title="heart"
          solid
          size={20}
          color="#464646"
          bgColor="#EDEBEB"
          marginHorizontal={5}
          pageName="FavouriteItemScreen"
          withShadow={false}
        />
      </View>
    </View>
  );
};

export default LogoV2;
