import React from 'react';
import {ScrollView, View} from 'react-native';
import Background from '../Components/Background';
import Card from '../Components/Card';
import LogoV2 from '../Components/LogoV2';
import Title from '../Components/Title';
import ListingItemSeperator from '../Components/ListingItemSeperator';

const HomePage = () => {
  return (
    <Background>
      <LogoV2 />
      <Title text="الرئيسية" />
      <Title
        text="الأكثر شعبية"
        titleStyle={{fontSize: 17, color: 'black', marginVertical: 10}}
      />
      <ScrollView horizontal>
        <Card />
        <ListingItemSeperator />
        <Card />
      </ScrollView>
      <Title
        text="أضيف مؤخرا "
        titleStyle={{fontSize: 17, color: 'black', marginVertical: 10}}
      />
    </Background>
  );
};

export default HomePage;
