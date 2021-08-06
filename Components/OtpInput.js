import React, {useState} from 'react';
import {View, Platform, StyleSheet} from 'react-native';

import OTPInputView from '@twotalltotems/react-native-otp-input';

const OtpInput = () => {
  const [code, setCode] = useState(0);
  return (
    <View style={styles.container}>
      <OTPInputView
        pinCount={4}
        style={{
          height: 100,
          width: '95%',
        }}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={c => {
          setCode(c);
          console.log(code);
        }}
        placeholderCharacter="&#8212;"
        placeholderTextColor="#bfbfbf"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 80,
    height: 80,
    color: 'black',
    fontSize: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'red',
        shadowOffset: {height: 7, height: 7},
        shadowOpacity: 1,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
        shadowColor: 'red',
      },
    }),
  },

  underlineStyleHighLighted: {
    borderColor: '#FF6B22',
  },
});

export default OtpInput;
