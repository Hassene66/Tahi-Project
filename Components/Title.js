import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Title = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Cairo-Bold',
    fontSize: 25,
    color: '#FF6B21',
    marginVertical: 30,
  },
});
