import React from 'react';
import {View, SafeAreaView, Image, Dimensions, FlatList} from 'react-native';
import ListingItemSeperator from './ListingItemSeperator';
import Title from './Title';
import uuid from 'react-native-uuid';
const FoodPhotos = ({platePhotos: arrImages}) => {
  renderImages = ({item: {name, url}, index}) => {
    return (
      <View
        keyExtractor={uuid.v4()}
        style={[
          {flex: 1, alignItems: 'flex-start'},
          index % 2 == 0 ? {marginRight: 3} : {marginLeft: 3},
        ]}>
        <Image
          source={url}
          style={{
            borderRadius: 20,
            height: Dimensions.get('window').width / 2 - 70,
            width: Dimensions.get('window').width / 2 - 35,
            overflow: 'hidden',
          }}
        />
        <Title
          text={name}
          titleStyle={{
            paddingRight: 9,
            marginTop: 7,
            fontSize: 15,
            color: 'black',
            fontFamily: 'Cairo-SemiBold',
          }}
        />
      </View>
    );
  };

  return (
    <View style={{justifyContent: 'center'}}>
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
