import React from 'react';
import {View, SafeAreaView, Image, Dimensions, FlatList} from 'react-native';
import ListingItemSeperator from './ListingItemSeperator';
import Title from './Title';
const FoodPhotos = ({platePhotos: arrImages}) => {
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
            height: Dimensions.get('window').width / 2 - 65,
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
    <View>
      <SafeAreaView
        style={{
          marginHorizontal: 15,
          marginTop: 15,
        }}>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            numColumns={2}
            data={arrImages}
            keyExtractor={(_, id) => id.toString()}
            renderItem={renderImages}
            ItemSeparatorComponent={() => (
              <ListingItemSeperator vertical={false} />
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default FoodPhotos;
