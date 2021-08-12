import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Background = ({children, isInverted}) => {
  return (
    <LinearGradient
      colors={
        isInverted
          ? ['#FFF8F4', '#FFEFE7', '#FEE4D7']
          : ['#FEE4D7', '#FFEFE7', '#FFF8F4']
      }
      style={styles.bg}>
      {children}
    </LinearGradient>
  );
};

export default Background;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    padding: 15,
  },
});
