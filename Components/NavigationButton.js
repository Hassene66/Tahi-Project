import * as React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconBackground from './IconBackground';
const NavigationButton = ({
  iconName = 'chevron-right',
  size = 19,
  iconStyle = {},
  gradientColor = [],
  color = 'white',
  iconType = '',
}) => {
  phoneNumber = 54777481;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log(`${iconType} button is pressed`);
        iconType === 'phone'
          ? Linking.openURL(`tel:${phoneNumber}`)
          : iconType === 'message'
          ? Linking.openURL(`sms:${phoneNumber}`)
          : console.log('other');
      }}>
      <View>
        <IconBackground gradientColor={gradientColor}>
          <View style={[styles.container, {iconStyle}]}>
            <FontAwesome5 name={iconName} color={color} size={size} />
          </View>
        </IconBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NavigationButton;
