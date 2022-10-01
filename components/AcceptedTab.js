import React from 'react';
import {StyleSheet, View} from 'react-native';
import AcceptedCard from './AcceptedCard';

const AcceptedTab = () => {
  const cardData = [
    {
      id: 1,
      userName: 'علي عبدالله',
      date: '20/11/2021',
      deliveryAdress: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم',
      details: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم',
      country: 'مكة المكرمة ',
      region: 'مكة المكرمة ',
      blueTags: ['المفطح', 'الكبسة', 'الكبسة', 'المعصوب'],
      pinkTags: ['المفطح', 'الكبسة', 'الكبسة', 'المعصوب'],
      moreDetails: true,
    },
    {
      id: 2,
      userName: 'علي عبدالله',
      date: '20/11/2021',
      deliveryAdress: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم',
      details: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم',
      country: 'مكة المكرمة ',
      region: 'مكة المكرمة ',
      blueTags: ['المفطح', 'الكبسة', 'الكبسة', 'المعصوب'],
      pinkTags: ['المفطح', 'الكبسة', 'الكبسة', 'المعصوب'],
      moreDetails: true,
    },
    {
      id: 3,
      userName: 'علي عبدالله',
      date: '20/11/2021',
      deliveryAdress: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم',
      details: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم',
      country: 'مكة المكرمة ',
      region: 'مكة المكرمة ',
      blueTags: ['المفطح', 'الكبسة', 'الكبسة', 'المعصوب'],
      pinkTags: ['المفطح', 'الكبسة', 'الكبسة', 'المعصوب'],
      moreDetails: true,
    },
  ];
  return (
    <View>
      <AcceptedCard data={cardData} />
    </View>
  );
};

export default AcceptedTab;

const styles = StyleSheet.create({});
