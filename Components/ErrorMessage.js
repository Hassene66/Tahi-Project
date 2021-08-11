import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HelperText} from 'react-native-paper';
import {useFormikContext} from 'formik';
const ErrorMessage = ({error}) => {
  const {isValid} = useFormikContext();
  if (!isValid && error)
    return <HelperText style={styles.error}>{error}</HelperText>;
  return null;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontFamily: 'Cairo-SemiBold',
  },
});
