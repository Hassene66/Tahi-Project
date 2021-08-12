import React, {useState} from 'react';
import {View, Platform, StyleSheet} from 'react-native';

import OTPInputView from '@twotalltotems/react-native-otp-input';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik';
const OtpInput = ({name}) => {
  const {setFieldValue, validateField, errors} = useFormikContext();
  return (
    <>
      <View style={styles.container}>
        <OTPInputView
          pinCount={4}
          style={{
            height: 100,
            width: '95%',
          }}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeChanged={code => {
            console.log('onCodeChanged : ' + code);
            setFieldValue(name, code);
          }}
          onCodeFilled={code => {
            setTimeout(() => validateField(name), 150);
          }}
          placeholderCharacter="&#8212;"
          placeholderTextColor="#bfbfbf"
          autoFocusOnLoad={false}
        />
      </View>
      <ErrorMessage error={errors[name]} />
    </>
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
        shadowColor: 'rgba(255,78,54,18)',
        shadowOffset: {height: 7, width: 7},
        shadowOpacity: 1,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
        shadowColor: 'rgba(255,78,54,18)',
      },
    }),
  },

  underlineStyleHighLighted: {
    borderColor: '#FF6B22',
  },
});

export default OtpInput;
