import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const RoundIcon = ({
  title = 'chevron-right',
  solid = false,
  size = 20,
  color = 'black',
  bgColor,
  marginHorizontal,
  pageName = undefined,
  withShadow = true,
  isFontAwesome = true,
  style = {},
}) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginHorizontal: 0,
    },
    icon: {
      height: 40,
      width: 40,
      borderRadius: 100,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 8,
      ...Platform.select({
        ios: {
          shadowColor: 'red',
          shadowOffset: {height: 7, width: 7},
          shadowOpacity: withShadow ? 1 : 0,
          shadowRadius: 10,
        },
        android: {
          elevation: withShadow ? 10 : 0,
          shadowColor: 'red',
        },
      }),
    },
  });
  return (
    <View style={[styles.container, {marginHorizontal: marginHorizontal}]}>
      <TouchableWithoutFeedback
        onPress={pageName && (() => navigation.navigate(pageName))}>
        <View style={[styles.icon, {backgroundColor: bgColor}, style]}>
          {isFontAwesome ? (
            <FontAwesome5
              name={title}
              size={15}
              color="black"
              solid={solid}
              size={size}
              color={color}
            />
          ) : (
            <Feather
              name={title}
              size={15}
              color="black"
              solid={solid}
              size={size}
              color={color}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default RoundIcon;
