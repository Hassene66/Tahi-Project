import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const PreviousPageNavigation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.icon}>
          <FontAwesome5 name="chevron-right" size={15} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    ...Platform.select({
      ios: {
        shadowColor: 'red',
        shadowOffset: {height: 7, width: 7},
        shadowOpacity: 1,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
        shadowColor: 'red',
      },
    }),
  },
});

export default PreviousPageNavigation;
