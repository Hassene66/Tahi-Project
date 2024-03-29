import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Title from './Title';

const LogoV3 = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image source={require('../assets/logo/tahiV2.png')} />
      </View>
      <Title text="طلباتي" titleStyle={{color: '#FA5730', fontSize: 27}} />
      <View style={{flex: 1}}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
export default LogoV3;
