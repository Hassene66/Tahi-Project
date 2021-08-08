import React, {useState} from 'react';
import {InputPhone} from '@my_name_is_nero/input-phone';

import {StyleSheet, View} from 'react-native';
import RadioButton from '../Components/RadioButton';
import ConfirmationButton from '../Components/ConfirmationButton';
import Logo from '../Components/Logo';
import Background from '../Components/Background';
import Title from '../Components/Title';

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
  const [phoneNumber, setPhoneNumber] = useState({
    countryCode: '',
    phoneNumber: '',
  });
  return (
    <Background>
      <Logo marginTp={100} />
      <Title text="تسجيل الدخول" titleStyle={{marginBottom: 20}} />
      <InputPhone
        placeholderSearch="بحث"
        placeholder="رقم الهاتف"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        containerStyle={{}}
      />
      <RadioButton data={data} onChangeValue={() => console.log('Changed')} />
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
