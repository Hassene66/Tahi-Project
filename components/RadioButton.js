import React from 'react';
import {StyleSheet} from 'react-native';
import RadioButtonRN from './RadioButtonRN';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFormikContext} from 'formik';
const RadioButton = ({data, initial = -1, modifiedVersion = false, name}) => {
  const {setFieldValue} = useFormikContext();
  return (
    <RadioButtonRN
      data={data}
      initial={initial}
      selectedBtn={item => setFieldValue(name, item)}
      textStyle={styles.textStyle}
      style={{flexDirection: 'row', marginVertical: 7}}
      duration={250}
      boxStyle={styles.boxStyle}
      boxActiveBgColor="rgba(250, 189, 48, 0.2)"
      boxDeactiveBgColor="white"
      activeColor="#FABD30"
      icon={<Icon name="check-circle" size={25} color="#FF6B21" />}
      modifiedVersion={modifiedVersion}
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
