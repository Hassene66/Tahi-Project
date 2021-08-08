import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

const Logo = ({marginTP}) => {
  return (
    <View style={[styles.image, {marginTop: marginTP}]}>
      <Image source={require('../assets/logo/tahi.png')} />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Logo;
