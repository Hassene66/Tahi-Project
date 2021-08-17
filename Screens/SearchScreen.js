import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Background from '../Components/Background';
import PreviousPageNavigation from '../Components/PreviousPageNavigation';
import Title from '../Components/Title';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const Search = () => {
  return (
    <Background isInverted>
      <View
        style={{alignItems: 'center', flexDirection: 'row', paddingBottom: 20}}>
        <View style={{flex: 0.7}}>
          <PreviousPageNavigation />
        </View>
        <View style={{flex: 1}}>
          <Title text="بحث" titleStyle={styles.title} />
        </View>
      </View>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <View style={{flex: 0.35}}>
          <View
            style={{
              backgroundColor: '#FF5F22',
              height: 65,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 5,
              elevation: 20,
            }}>
            <View style={{flex: 0.3}}>
              <Icon1 name="map-pin" size={27} color="white" />
            </View>
            <View
              style={{
                flex: 0.8,
                alignItems: 'center',
              }}>
              <Title
                text="المنطقة"
                titleStyle={{color: 'white', fontSize: 15}}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.7,
            backgroundColor: 'white',
            marginLeft: 10,
            borderRadius: 10,
            overflow: 'hidden',
            flexDirection: 'row',
            height: 65,
            elevation: 20,
            shadowColor: 'rgba(255,78,54,18)',
          }}>
          <View
            style={{
              flex: 3,
              justifyContent: 'center',
            }}>
            <TextInput
              placeholder="البحث عن الشيف"
              color="#999999"
              placeholderTextColor="#999999"
              style={{
                fontFamily: 'Cairo-Regular',
                textAlign: 'right',
                fontSize: 17,
                paddingLeft: 20,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon2 name="search" size={28} color="#464646" />
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Search;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
});
