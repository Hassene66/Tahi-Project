import React from 'react';
import {StyleSheet} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RadioButton = ({onChangeValue, data}) => {
  return (
    <RadioButtonRN
      data={data}
      initial={2}
      selectedBtn={onChangeValue}
      textStyle={styles.textStyle}
      style={{flexDirection: 'row'}}
      duration={250}
      boxStyle={styles.boxStyle}
      boxActiveBgColor="rgba(250, 189, 48, 0.2)"
      boxDeactiveBgColor="white"
      activeColor="#FABD30"
      icon={<Icon name="check-circle" size={25} color="#FF6B21" />}
    />
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  boxStyle: {
    borderRadius: 10,
    borderWidth: 2,
    flex: 1,
    margin: 5,
  },
  textStyle: {fontFamily: 'Cairo-SemiBold'},
});
