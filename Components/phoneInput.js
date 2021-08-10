import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Input from './Input';

const PhoneInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.country}>
        <Image source={require('../assets/images/country.png')} />
        <Text style={styles.text}>+699</Text>
      </View>
      <Input label="رقم الهاتف" style={styles.PhoneInput} />
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  PhoneInput: {flex: 4},
  country: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 8,
    shadowColor: 'rgba(255,78,54,18)',
    marginRight: 8,
  },
  text: {
    paddingRight: 8,
    fontFamily: 'Cairo-SemiBold',
    fontSize: 16,
  },
});
