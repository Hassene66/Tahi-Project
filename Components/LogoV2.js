import React from 'react';
import {View} from 'react-native';
import Logo from './Logo';
import RoundIcon from './RoundIcon';

const LogoV2 = () => {
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
        <Logo marginTP={0} WIDTH={30} HEIGHT={30} />
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
        />
        <RoundIcon
          title="search"
          solid
          size={18}
          color="#464646"
          bgColor="#EDEBEB"
          marginHorizontal={5}
        />
        <RoundIcon
          title="heart"
          solid
          size={20}
          color="#464646"
          bgColor="#EDEBEB"
          marginHorizontal={5}
        />
      </View>
    </View>
  );
};

export default LogoV2;
