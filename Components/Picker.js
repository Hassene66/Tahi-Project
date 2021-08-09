import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ItemRadioBtn from './ItemRadioBtn';

const Picker = () => {
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
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
        <View style={styles.container}>
          <Text style={styles.text}>المدينة</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isVisible} animationType="slide">
        <ItemRadioBtn title="المدينة" data={list} />
      </Modal>
    </>
  );
};

export default Picker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    width: '80%',
    borderRadius: 10,
  },
  text: {
    paddingLeft: 10,
    fontSize: 20,
    fontFamily: 'Cairo-SemiBold',
    padding: 10,
  },
});
