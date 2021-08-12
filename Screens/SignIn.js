import React, {useState} from 'react';

import {StyleSheet, View} from 'react-native';
import RadioButton from '../Components/RadioButton';
import ConfirmationButton from '../Components/ConfirmationButton';
import Logo from '../Components/Logo';
import Background from '../Components/Background';
import Title from '../Components/Title';
import PhoneInput from '../Components/PhoneInput';
import * as yup from 'yup';
import Form from '../Components/AppForm';

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
    phoneNumber: yup
      .number()
      .typeError(' الرجاء إدخال أرقام')
      .required('الرجاء إدخال رقم الهاتف'),
  });
  return (
    <Background>
      <Logo marginTp={100} />
      <Title text="تسجيل الدخول" titleStyle={{marginBottom: 20}} />
      <Form
        initialValues={{
          userType: data[0],
          phoneNumber: '',
        }}
        onSubmit={values => console.log(values)}
        validationSchema={schema}>
        <PhoneInput name="phoneNumber" show={false} />
        <RadioButton
          initial={1}
          modifiedVersion={true}
          data={data}
          name="userType"
        />
        <View style={styles.btnContainer}>
          <ConfirmationButton
            onPress={() => navigation.navigate('SignInNextStep')}
            label="التالي"
          />
        </View>
      </Form>
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
