import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFormikContext} from 'formik';
const ConfirmationButton = ({
  label = 'لوريم ايبسوم ',
  onPress = () => null,
}) => {
  const {isValid, submitForm, validateForm, errors} = useFormikContext();
  return (
    <TouchableOpacity
      onPress={() => {
        submitForm();
        validateForm();
        setTimeout(() => {
          if (Object.keys(errors).length === 0 && isValid) onPress();
        }, 150);
      }}
      style={{
        justifyContent: 'flex-end',
      }}>
      <LinearGradient
        colors={['#FF6921', '#FFD051']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.btnContainer}>
        <Text style={styles.btn}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ConfirmationButton;

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 12,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  btn: {
    fontFamily: 'Cairo-Bold',
    color: 'white',
    fontSize: 15,
    padding: 18,
  },
});
