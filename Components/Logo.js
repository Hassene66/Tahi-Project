import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

const Logo = ({marginTP = 0, WIDTH = 100, HEIGHT = 100, isSmall = false}) => {
  const styles = StyleSheet.create({
    image: {
      width: WIDTH,
      height: HEIGHT,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <View style={[styles.image, {marginTop: marginTP}]}>
      {isSmall ? (
        <Image source={require('../assets/logo/tahiV2.png')} />
      ) : (
        <Image source={require('../assets/logo/tahi.png')} />
      )}
    </View>
  );
};

export default Logo;
