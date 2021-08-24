import React, {useState} from 'react';
import uuid from 'react-native-uuid';
import moment from 'moment-lite';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Button,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DateTimePicker = ({placeholder = 'لوريم ايبسوم ', name}) => {
  const {setFieldValue, errors, values} = useFormikContext();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setSelectedItem(moment(date).format('DD/MM/YYYY HH:mm'));
    hideDatePicker();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={showDatePicker}>
        <View style={[styles.container, errors[name] && styles.error]}>
          {[
            <Text key={uuid.v4()} style={styles.title}>
              {placeholder}
            </Text>,
            selectedItem ? (
              <Text key={uuid.v4()} style={styles.subTitle}>
                {selectedItem}
              </Text>
            ) : (
              <Text key={uuid.v4()} style={styles.subTitle}>
                {placeholder}
              </Text>
            ),
          ]}
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="calendar-range"
              size={28}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <ErrorMessage error={errors[name]} />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default DateTimePicker;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    height: 65,
    padding: 7,
    justifyContent: 'center',
    elevation: 10,
    shadowColor: 'rgba(255,78,54,18)',
  },
  title: {
    paddingRight: 10,
    fontSize: 12,
    fontFamily: 'Cairo-SemiBold',
    color: '#FF6B21',
  },
  subTitle: {
    paddingRight: 10,
    fontSize: 15,
    fontFamily: 'Cairo-SemiBold',
    color: 'black',
    alignSelf: 'flex-start',
  },
  iconContainer: {
    justifyContent: 'flex-end',
  },
  icon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingLeft: 7,
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    margin: 0,
    alignItems: undefined,
    justifyContent: 'flex-end',
  },
  error: {
    borderWidth: 2,
    borderColor: 'red',
  },
  list: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    height: '80%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden',
  },
});
