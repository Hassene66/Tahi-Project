import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Background = ({children}) => {
  return (
    <LinearGradient
      colors={['#FEE4D7', '#FFEFE7', '#FFF8F4']}
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
