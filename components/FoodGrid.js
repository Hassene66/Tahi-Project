import React, {useState} from 'react';
import {useFormikContext} from 'formik';

import {
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'react-native-check-box';
import ListingItemSeperator from './ListingItemSeperator';
import Title from './Title';
const FoodGrid = ({data = [], handleCheck = () => null, setData, name}) => {
  const {setFieldValue} = useFormikContext();
  renderImages = ({item: {id, label, url, checked}, index}) => {
    return (
      <View
        style={[
          {flex: 1, alignItems: 'flex-start'},
          index % 2 == 0 ? {marginRight: 3} : {marginLeft: 3},
        ]}>
        <ImageBackground
          source={url}
          style={{
            borderRadius: 20,
            height: Dimensions.get('window').width / 2 - 80,
            width: Dimensions.get('window').width / 2 - 35,
            overflow: 'hidden',
          }}>
          <CheckBox
            style={{
              flex: 1,
              paddingVertical: 10,
              justifyContent: 'flex-end',
              left: 15,
            }}
            checkedImage={
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 30,
                }}>
                <MaterialIcons
                  name="check-circle"
                  size={25}
                  color="#FF6B21"></MaterialIcons>
              </View>
            }
            unCheckedImage={
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 30,
                }}>
                <MaterialIcons
                  name="radio-button-unchecked"
                  size={25}
                  color="white"
                />
              </View>
            }
            onClick={() => {
              setData(handleCheck(id));
              setFieldValue(name, handleCheck(id));
            }}
            isChecked={checked}
          />
        </ImageBackground>

        <Title
          text={label}
          titleStyle={{
            paddingRight: 12,
            marginTop: 7,
            fontSize: 14,
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
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
          data={data}
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

export default FoodGrid;
