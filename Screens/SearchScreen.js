import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import Form from '../Components/AppForm';
import Background from '../Components/Background';
import Header from '../Components/Header';
import Picker from '../Components/Picker';
import RegionSearch from '../Components/RegionSearch';
import RegionPicker from '../Components/RegionSearch';
import * as yup from 'yup';
import ConfirmationButton from '../Components/ConfirmationButton';

const SearchScreen = () => {
  const region = [
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
  const services = [
    {id: 1, label: 'اسم الخدمات', checked: false},
    {id: 2, label: 'اسم الخدمات', checked: false},
    {id: 3, label: 'اسم الخدمات', checked: false},
    {id: 4, label: 'اسم الخدمات', checked: false},
    {id: 5, label: 'اسم الخدمات', checked: false},
    {id: 6, label: 'اسم الخدمات', checked: false},
    {id: 7, label: 'اسم الخدمات', checked: false},
    {id: 8, label: 'اسم الخدمات', checked: false},
    {id: 9, label: ' لوريم إيبسوم', checked: false},
    {id: 10, label: 'اسم الخدمات', checked: false},
    {id: 11, label: 'اسم الخدمات', checked: false},
    {id: 12, label: 'اسم الخدمات', checked: false},
    {id: 13, label: 'اسم الخدمات', checked: false},
  ];
  const schema = yup.object().shape({
    region: yup.object().required('الرجاء إدخال المنطقة').nullable(),
    searchForChef: yup.string().required('الرجاء إدخال الشيف'),
    services: yup
      .array()
      .required('الرجاء إختيار  الخدمات')
      .test('', 'الرجاء إدخال الخدمات ', arr => {
        if (typeof arr === 'object') {
          return arr.filter(el => el.checked === true).length !== 0;
        } else return false;
      }),
  });
  return (
    <Background isInverted>
      <Form
        initialValues={{
          region: null,
          searchForChef: '',
          services: [],
        }}
        onSubmit={values => console.log(values)}
        validationSchema={schema}>
        <ScrollView>
          <Header title="بحث" />
          <RegionPicker data={region} />
          <Picker
            withTitle={false}
            placeholder="الخدمات"
            name="services"
            list={services}
            chevronDirection="left"
            isRadio={false}
          />
          <ConfirmationButton label="تسجيل" />
        </ScrollView>
      </Form>
    </Background>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container1: {alignItems: 'center', flexDirection: 'row'},
});
