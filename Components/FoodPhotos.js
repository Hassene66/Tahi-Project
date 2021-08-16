import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Dimensions,
  FlatList,
  Text,
} from 'react-native';
import ListingItemSeperator from './ListingItemSeperator';
import Title from './Title';
const FoodPhotos = () => {
  const arrImages = [
    {name: 'إسم الطبق', url: require('../assets/images/photo1.jpg')},
    {name: 'إسم الطبق', url: require('../assets/images/photo2.jpg')},
    {name: 'إسم الطبق', url: require('../assets/images/photo3.jpg')},
    {name: 'إسم الطبق', url: require('../assets/images/photo1.jpg')},
    {name: 'إسم الطبق', url: require('../assets/images/photo2.jpg')},
    {name: 'إسم الطبق', url: require('../assets/images/photo3.jpg')},
    {name: 'إسم الطبق', url: require('../assets/images/photo1.jpg')},
    {name: 'إسم الطبق', url: require('../assets/images/photo2.jpg')},
    {name: 'إسم الطبق', url: require('../assets/images/photo3.jpg')},
  ];
  renderImages = ({item: {name, url}, index}) => {
    return (
      <View
        style={[
          {flex: 1, alignItems: 'flex-start'},
          index % 2 == 0 ? {marginRight: 8} : {marginLeft: 8},
        ]}>
        <Image
          source={url}
          style={{
            borderRadius: 35,
            height: 170,
            width: Dimensions.get('window').width / 2 - 40,
          }}
        />
        <Title
          text={name}
          titleStyle={{
            paddingRight: 9,
            marginTop: 7,
            fontSize: 13,
            color: 'black',
            fontFamily: 'Cairo-SemiBold',
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        marginHorizontal: 15,
        marginTop: 15,
      }}>
      <View>
        <FlatList
          horizontal={false}
          numColumns={2}
          data={arrImages}
          keyExtractor={(data, id) => id.toString()}
          renderItem={renderImages}
          ItemSeparatorComponent={() => (
            <ListingItemSeperator vertical={false} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default FoodPhotos;
