import React from 'react';
import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Background from './Background';
import ConfirmationButton from './ConfirmationButton';
import Header from './Header';
import Title from './Title';
import uuid from 'react-native-uuid';
import Button from './Button';
import {useNavigation, useRoute} from '@react-navigation/native';
const DishesDetails = ({data = []}) => {
  const route = useRoute();
  const navigation = useNavigation();
  const dishDetails = [
    {
      title: route.params.name,
      description:
        'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال',
      imageUrls: [
        require('../assets/images/photo1.jpg'),
        require('../assets/images/photo2.jpg'),
        require('../assets/images/photo3.jpg'),
        require('../assets/images/photo1.jpg'),
        require('../assets/images/photo2.jpg'),
        require('../assets/images/photo3.jpg'),
        require('../assets/images/photo1.jpg'),
      ],
    },
  ];
  return (
    <Background isInverted>
      <Header title="" />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={dishDetails}
        keyExtractor={() => uuid.v4()}
        renderItem={({item: {title, description, imageUrls}}) => (
          <>
            <Title text={title} />
            <Text style={styles.details}>{description}</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'stretch',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                {imageUrls.map(url => (
                  <Image key={uuid.v4()} source={url} style={styles.image} />
                ))}
              </View>
            </ScrollView>
          </>
        )}
      />
      <Button label="أضف" onPress={() => navigation.navigate('')} />
    </Background>
  );
};

export default DishesDetails;

const styles = StyleSheet.create({
  details: {fontFamily: 'Cairo-Regular', fontSize: 14},
  image: {
    borderRadius: 20,
    height: 150,
    overflow: 'hidden',
    width: '48%',
    marginBottom: 12,
  },
});
