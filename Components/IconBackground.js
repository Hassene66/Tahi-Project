import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const IconBackground = ({children, gradientColor, start, end}) => {
  return (
    <LinearGradient style={styles.bg} colors={gradientColor}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    borderRadius: 300,
  },
});

export default IconBackground;
