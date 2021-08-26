import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';

const LargeTextInput = ({
  name = '',
  placeholder = 'نص الشكوى',
  containerStyle = {},
  textStyle = {},
}) => {
  const {handleChange, errors} = useFormikContext();

  return (
    <>
      <View
        style={[
          styles.container,
          containerStyle,
          errors[name] && styles.error,
        ]}>
        <TextInput
          textAlignVertical="top"
          multiline
          numberOfLines={5}
          placeholder={placeholder}
          placeholderTextColor="black"
          style={[styles.text, textStyle]}
          onChangeText={handleChange(name)}
        />
      </View>
      <ErrorMessage error={errors[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontFamily: 'Cairo-SemiBold',
  },
  container: {
    borderRadius: 9,
    borderColor: '#707070',
    borderWidth: 1,
    textAlign: 'right',
  },
  error: {
    borderWidth: 2,
    borderColor: 'red',
  },
});
export default LargeTextInput;
