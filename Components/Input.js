import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import * as yup from 'yup';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik';
const Input = ({
  label = 'لوريم ايبسوم ',
  style = {},
  keyboardType = 'default',
  name,
  show = true,
}) => {
  const {handleChange, setFieldTouched, errors} = useFormikContext();

  return (
    <>
      <View
        style={[
          styles.inputContainer,
          errors[name] && styles.error,
          {...style},
        ]}>
        <TextInput
          style={styles.input}
          label={label}
          keyboardType={keyboardType}
          textAlign="right"
          underlineColor="transparent"
          onChangeText={handleChange(name)}
          theme={{
            fonts: {
              regular: {
                fontFamily: 'Cairo-Regular',
              },
            },
            colors: {primary: '#FF6B21', text: 'black'},
          }}
        />
      </View>
      {show && <ErrorMessage error={errors[name]} />}
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 10,
    height: 65,
    overflow: 'hidden',
    shadowOpacity: 0.5,
    elevation: 10,
    shadowOffset: {width: 15, height: 15},
    shadowColor: 'rgba(255,78,54,18)',
  },
  input: {
    textAlign: 'right',
    borderRadius: 0,
    height: 67,
    overflow: 'hidden',
    backgroundColor: 'white',
    fontWeight: null,
  },
  error: {
    borderWidth: 2,
    borderColor: 'red',
  },
});
