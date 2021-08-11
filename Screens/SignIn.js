import React, {useState} from 'react';

import {StyleSheet, View} from 'react-native';
import RadioButton from '../Components/RadioButton';
import ConfirmationButton from '../Components/ConfirmationButton';
import Logo from '../Components/Logo';
import Background from '../Components/Background';
import Title from '../Components/Title';
import PhoneInput from '../Components/PhoneInput';
import * as yup from 'yup';

const SignIn = ({navigation}) => {
  const data = [
    {
      id: 1,
      label: 'عميل',
    },
    {
      id: 2,
      label: 'الشيف',
    },
  ];
  const schema = yup.object().shape({
    name: yup.string().required('الرجاء إدخال الإسم'),
    surname: yup.string().required('الرجاء إدخال اللقب'),
    phoneNumber: yup
      .number()
      .typeError(' إدخال الرجاء أرقام')
      .required('الرجاء إدخال رقم الهاتف'),
    country: yup.object().required('الرجاء إدخال المدينة').nullable(),
    region: yup.object().required('الرجاء إدخال المنطقة').nullable(),
  });
  return (
    <Background>
      <Logo marginTp={100} />
      <Title text="تسجيل الدخول" titleStyle={{marginBottom: 20}} />
      <RadioButton
        initial={1}
        modifiedVersion={true}
        data={data}
        onChangeValue={() => console.log('Changed')}
      />
      <PhoneInput />
      <View style={styles.btnContainer}>
        <ConfirmationButton
          onPress={() => navigation.navigate('SignInNextStep')}
          label="التالي"
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default SignIn;
