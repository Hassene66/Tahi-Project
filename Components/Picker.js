import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import ItemRadioBtn from './ItemRadioBtn';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';
const Picker = ({placeholder = 'لوريم ايبسوم ', name}) => {
  const list = [
    {id: 1, label: 'الطائف'},
    {id: 2, label: 'الدمام'},
    {id: 3, label: 'بريدة'},
    {id: 4, label: 'مدينة الخبر'},
    {id: 5, label: 'تبوك'},
    {id: 6, label: 'جدة'},
    {id: 7, label: 'المدينة المنورة'},
    {id: 8, label: 'الأحساء'},
    {id: 9, label: 'الطائف'},
    {id: 10, label: 'الدمام'},
    {id: 11, label: 'بريدة'},
    {id: 12, label: 'مدينة الخبر'},
    {id: 13, label: 'تبوك'},
  ];
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const {handleChange, setFieldValue, errors, touched, values} =
    useFormikContext();
  const onSelectItem = item => {
    setSelectedItem(item);
    setTimeout(() => {
      setIsVisible(false);
    }, 170);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
        <View style={[styles.container, errors[name] && styles.error]}>
          <Text style={styles.title}>{placeholder}</Text>
          {selectedItem ? (
            <Text style={styles.subTitle}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.subTitle}>{placeholder}</Text>
          )}
          <Icon style={styles.icon} name="chevron-down" size={23} />
        </View>
      </TouchableWithoutFeedback>
      <ErrorMessage error={errors[name]} />

      <View>
        <Modal
          style={styles.modal}
          visible={isVisible}
          animationType="slide"
          backdropOpacity={0}
          animationInTiming={50}
          propagateSwipe={true}
          hideModalContentWhileAnimating={true}
          useNativeDriver
          onSwipeComplete={() => setIsVisible(false)}
          swipeDirection="down"
          onBackButtonPress={() => setIsVisible(false)}>
          <View
            style={{
              backgroundColor: 'white',
              height: '60%',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}>
            <ItemRadioBtn
              name={name}
              title={placeholder}
              data={list}
              initial={-1}
              onPress={item => {
                setFieldValue(name, item);
                onSelectItem(item);
              }}
            />
          </View>
        </Modal>
      </View>
    </>
  );
};

export default Picker;

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
});
