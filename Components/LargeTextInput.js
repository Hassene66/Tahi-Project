import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import ErrorMessage from './ErrorMessage';

const LargeTextInput = ({
  placeholder = 'نص الشكوى',
  containerStyle = {},
  textStyle = {},
}) => {
  const {handleChange, errors, values} = useFormikContext();
  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <TextInput
          textAlignVertical="top"
          multiline
          numberOfLines={5}
          placeholder={placeholder}
          placeholderTextColor="black"
          style={[styles.text, textStyle]}
          onChangeText={handleChange(name)}
          value={values[name]}
        />
      </View>
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
