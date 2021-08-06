import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.image}>
      <Image source={require('../assets/logo/tahi.png')} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
