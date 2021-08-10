import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import Background from '../Components/Background';
import ConfirmationButton from '../Components/ConfirmationButton';
import Input from '../Components/Input';
import Logo from '../Components/Logo';
import RadioButton from '../Components/RadioButton';
import Title from '../Components/Title';
import * as yup from 'yup';
import PreviousPageNavigation from '../Components/PreviousPageNavigation';
import Picker from '../Components/Picker';

const Subscribe = () => {
  const data1 = [
    {
      id: 1,
      label: 'عميل',
    },
    {
      id: 2,
      label: 'الشيف',
    },
  ];
  const data2 = [
    {
      id: 1,
      label: 'ذكر',
    },
    {
      id: 2,
      label: 'أنثى',
    },
  ];
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState(null);
  const [userType, SetUserType] = useState(data1[0].label);
  const schema = yup.object().shape({
    name: yup
      .string()
      .typeError('الرجاء إدخال أحرف')
      .min(1, 'الرجاء إدخال الإسم'),
    surname: yup
      .string()
      .typeError('الرجاء إدخال أحرف')
      .min(1, 'الرجاء إدخال اللقب'),
  });
  const handleSelectGender = gender => {
    setGender(() => gender);
  };
  const handleUserTypeChange = userType => {
    SetUserType(() => userType);
  };
  const handleNameChange = name => {
    setName(() => name);
  };
  const handleSurnameChange = surname => {
    setName(() => surname);
  };
  return (
    <Background>
      <PreviousPageNavigation />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Logo />
        <Title text="مستخدم جديد" />
        <Text style={styles.text}>نوع المستخدم</Text>
        <RadioButton
          modifiedVersion={true}
          initial={1}
          data={data1}
          onChangeValue={handleUserTypeChange}
        />
        <Input
          label="الإسم"
          style={{marginVertical: 25}}
          value={name}
          onChangeValue={handleNameChange}
        />
        <Input
          label="اللقب"
          style={{marginVertical: 25}}
          value={surname}
          onChangeValue={handleSurnameChange}
        />
        <Picker placeholder="المدينة" />
        <Picker placeholder="المنطقة" />
        <Text style={[styles.text, {marginTop: 10}]}>
          الجنس<Text style={styles.lightText}> ( اختياري )</Text>
        </Text>
        <RadioButton
          modifiedVersion={true}
          data={data2}
          onChangeValue={handleSelectGender}
        />
        <ConfirmationButton label="تسجيل" />
      </ScrollView>
    </Background>
  );
};

export default Subscribe;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Cairo-SemiBold',
  },
  lightText: {
    color: '#666666',
    fontSize: 12,
  },
});
