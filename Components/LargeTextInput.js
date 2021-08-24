import React from 'react';
import {View, TextInput} from 'react-native';

const LargeTextInput = () => {
  return (
    <View
      style={{
        borderRadius: 9,
        borderColor: '#707070',
        borderWidth: 1,
        justifyContent: 'flex-end',
      }}>
      <TextInput
        textAlignVertical="top"
        multiline
        numberOfLines={5}
        placeholder="نص الشكوى"
        placeholderTextColor="black"
        style={{padding: 10}}
      />
    </View>
  );
};

export default LargeTextInput;
