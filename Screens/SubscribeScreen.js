import React from 'react';
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
import PhoneInput from '../Components/PhoneInput';
import Form from '../Components/AppForm';
const Subscribe = () => {
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
  const schema = yup.object().shape({
    name: yup.string().required('الرجاء إدخال الإسم'),
    surname: yup.string().required('الرجاء إدخال اللقب'),
    phoneNumber: yup
      .number()
      .typeError(' الرجاء إدخال أرقام')
      .required('الرجاء إدخال رقم الهاتف'),
    country: yup.object().required('الرجاء إدخال المدينة').nullable(),
    region: yup.object().required('الرجاء إدخال المنطقة').nullable(),
  });
  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PreviousPageNavigation />
        <Logo />
        <Title text="مستخدم جديد" />
        <Text style={styles.text}>نوع المستخدم</Text>
        <Form
          initialValues={{
            userType: data1[0],
            userGender: undefined,
            name: '',
            surname: '',
            phoneNumber: '',
            country: null,
            region: null,
          }}
          onSubmit={values => console.log(values)}
          validationSchema={schema}>
          <RadioButton
            modifiedVersion={true}
            initial={1}
            data={data1}
            name="userType"
          />
          <Input name="name" label="الإسم" />
          <Input name="surname" label="اللقب" />
          <PhoneInput name="phoneNumber" show={false} />
          <Picker placeholder="المدينة" name="country" list={list} />
          <Picker placeholder="المنطقة" name="region" list={list} />
          <Text style={[styles.text, {marginTop: 10}]}>
            الجنس<Text style={styles.lightText}> ( اختياري )</Text>
          </Text>
          <RadioButton name="userGender" modifiedVersion={true} data={data2} />
          <ConfirmationButton label="تسجيل" />
        </Form>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Cairo-SemiBold',
  },
  lightText: {
    color: '#666666',
    fontSize: 12,
  },
});

export default Subscribe;
