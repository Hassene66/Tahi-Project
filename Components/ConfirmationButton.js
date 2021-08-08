import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ConfirmationButton = ({
  onPress = () => console.log(),
  label = 'Test',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
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
