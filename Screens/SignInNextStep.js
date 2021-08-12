import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Background from '../Components/Background';
import ConfirmationButton from '../Components/ConfirmationButton';
import Logo from '../Components/Logo';
import OtpInput from '../Components/OtpInput';
import PreviousPageNavigation from '../Components/PreviousPageNavigation';
import {useNavigation} from '@react-navigation/native';
import Form from '../Components/AppForm';
import * as yup from 'yup';
const SignInNextStep = ({phoneNum = 92221321321}) => {
  const navigation = useNavigation();
  const schema = yup.object().shape({
    otpInput: yup
      .number()
      .required('الرجاء إدخال الكود')
      .typeError('الرجاء إدخال أرقام فقط')
      .test('', 'الرجاء إدخال أرقام فقط', code => code !== ',')
      .test(
        '',
        'الرجاء إدخال كل الأرقام المطلوبة',
        code => String(code).length === 4,
      ),
  });

  return (
    <>
      <Background>
        <PreviousPageNavigation />
        <Logo marginTp={20} />
        <Text style={styles.text}>التحقق من رقم الجوال</Text>
        <Form
          initialValues={{
            otpInput: '',
          }}
          onSubmit={values => console.log(values)}
          validationSchema={schema}>
          <View style={styles.textContainer}>
            <Text style={styles.text2}>
              تم إرسال كود على رقم هاتفك
              <Text style={styles.phoneNumber}> {phoneNum}</Text>
            </Text>
          </View>
          <OtpInput name="otpInput" />
          <View style={styles.resendTextContainer}>
            <Text
              onPress={() => console.log('resend')}
              style={styles.resendText}>
              إعادة إرسال الرّمز
            </Text>
          </View>
          <View style={styles.btn}>
            <ConfirmationButton
              label="تسجيل الدخول"
              onPress={() => navigation.navigate('Subscribe')}
            />
          </View>
        </Form>
      </Background>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gradientColor: {
    paddingHorizontal: 15,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  text: {
    fontFamily: 'Cairo-Bold',
    fontSize: 25,
    color: '#FF6B21',
    marginTop: 30,
    paddingBottom: 17,
  },
  text2: {
    fontFamily: 'Cairo-SemiBold',
    fontSize: 17,
    color: 'black',
  },
  phoneNumber: {
    color: '#FF6B21',
    fontFamily: 'Cairo-SemiBold',
    fontSize: 17,
  },
  resendText: {
    fontFamily: 'Cairo-Bold',
  },
  resendTextContainer: {
    alignItems: 'flex-end',
    paddingTop: 15,
  },
  textContainer: {
    paddingBottom: 30,
    paddingTop: 7,
  },
});

export default SignInNextStep;
