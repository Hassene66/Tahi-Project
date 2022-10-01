import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import FoodPhotos from './FoodPhotos';
import Title from './Title';
import uuid from 'react-native-uuid';

import DeliveryService from './DeliveryService';
import ListingItemSeperator from './ListingItemSeperator';
const About = ({
  platePhotos,
  about: {countryName, location, services, delivryServices},
}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View key={uuid.v4()} style={styles.container}>
        <Title
          text="المدينة"
          titleStyle={{marginTop: 5, color: 'black', fontSize: 15}}
        />
        <Title
          text={countryName}
          titleStyle={{
            marginTop: 1,
            color: 'black',
            fontSize: 13,
            fontFamily: 'Cairo-SemiBold',
            fontWeight: '200',
          }}
        />
        <Title
          text="المنطقة"
          titleStyle={{marginTop: 5, color: 'black', fontSize: 15}}
        />
        <Title
          text={location}
          titleStyle={{
            marginTop: 1,
            color: 'black',
            fontSize: 13,
            fontFamily: 'Cairo-SemiBold',
            fontWeight: '200',
          }}
        />
        <Title
          text="الخدمات"
          titleStyle={{marginTop: 5, color: 'black', fontSize: 15}}
        />

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {services.map((service, idx) => (
            <View
              key={idx}
              style={{
                backgroundColor: '#EFFCFF',
                borderRadius: 10,
                alignItems: 'center',
                alignSelf: 'flex-start',
                paddingHorizontal: 10,
                marginHorizontal: 4,
                paddingVertical: 5,
                marginVertical: 5,
              }}>
              <Title
                text={service}
                titleStyle={{marginTop: 0, color: '#30D2FA', fontSize: 13}}
              />
            </View>
          ))}
        </View>

        <Title
          text="الأطباق"
          titleStyle={{marginTop: 5, color: 'black', fontSize: 15}}
        />
        <FoodPhotos platePhotos={platePhotos} />
        <Title
          text="خدمة التوصيل"
          titleStyle={{marginTop: 5, color: 'black', fontSize: 15}}
        />
        <ListingItemSeperator vertical={false} height={9} />
        {delivryServices.map((service, idx) => (
          <DeliveryService key={idx} serviceName={service} />
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    left: 14,
  },
});
export default About;
