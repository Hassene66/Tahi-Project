import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';
import * as yup from 'yup';

const Input = ({
  label = 'لوريم ايبسوم ',
  style = {},
  handleChangeText = text => console.log(text),
}) => {
  const [isValid, setIsValid] = useState(false);
  return (
    <View style={[styles.inputContainer, {...style}]}>
      <TextInput
        style={styles.input}
        label={label}
        textAlign="right"
        underlineColor="transparent"
        onChangeText={handleChangeText}
        theme={{
          fonts: {
            regular: {
              fontFamily: 'Cairo-Regular',
            },
          },
          colors: {primary: '#FF6B21', text: 'black'},
        }}
      />
      <HelperText></HelperText>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 15,
    borderRadius: 10,
    height: 65,
    overflow: 'hidden',
    shadowOpacity: 0.5,
    elevation: 15,
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
});
