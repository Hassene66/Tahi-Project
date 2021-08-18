import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Form from '../Components/AppForm';
import Background from '../Components/Background';
import Header from '../Components/Header';
import Picker from '../Components/Picker';
import uuid from 'react-native-uuid';
import RegionPicker from '../Components/RegionSearch';
import * as yup from 'yup';
import ConfirmationButton from '../Components/ConfirmationButton';
import Title from '../Components/Title';
import RadioGroup from '../lib/react-native-radio-buttons-group';
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
    {id: 9, label: 'لوريم إيبسوم', checked: false},
    {id: 10, label: 'اسم الخدمات', checked: false},
    {id: 11, label: 'اسم الخدمات', checked: false},
    {id: 12, label: 'اسم الخدمات', checked: false},
    {id: 13, label: 'اسم الخدمات', checked: false},
  ];

  const arrImages = [
    {
      id: 1,
      label: 'إسم الطبق',
      url: require('../assets/images/photo1.jpg'),
      checked: false,
    },
    {
      id: 2,
      label: 'إسم الطبق',
      url: require('../assets/images/photo2.jpg'),
      checked: false,
    },
    {
      id: 3,
      label: 'إسم الطبق',
      url: require('../assets/images/photo3.jpg'),
      checked: false,
    },
    {
      id: 4,
      label: 'إسم الطبق',
      url: require('../assets/images/photo1.jpg'),
      checked: false,
    },
    {
      id: 5,
      label: 'إسم الطبق',
      url: require('../assets/images/photo2.jpg'),
      checked: false,
    },
    {
      id: 6,
      label: 'إسم الطبق',
      url: require('../assets/images/photo3.jpg'),
      checked: false,
    },
    {
      id: 7,
      label: 'إسم الطبق',
      url: require('../assets/images/photo1.jpg'),
      checked: false,
    },
    {
      id: 8,
      label: 'إسم الطبق',
      url: require('../assets/images/photo2.jpg'),
      checked: false,
    },
    {
      id: 9,
      label: 'إسم الطبق',
      url: require('../assets/images/photo3.jpg'),
      checked: false,
    },
  ];
  const deliveryServices = [
    {
      id: 1,
      label: 'الطبخ عند العميل',
    },
    {
      id: 2,
      label: 'الطبخ مع التوصيل',
    },
    {
      id: 3,
      label: 'الطبخ  عن بعد',
    },
  ];
  const radioButtonsData = [
    {
      id: uuid.v4(),
      label: 'الطبخ  عن بعد',
      value: 'الطبخ  عن بعد',
    },
    {
      id: uuid.v4(),
      label: 'الطبخ مع التوصيل',
      value: 'الطبخ مع التوصيل',
    },
    {
      id: uuid.v4(),
      label: 'الطبخ عند العميل',
      value: 'الطبخ عند العميل',
    },
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
    dishes: yup
      .array()
      .required('الرجاء إختيار  الاطباق')
      .test('', 'الرجاء إدخال الاطباق ', arr => {
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
          dishes: [],
        }}
        onSubmit={values => console.log(values)}
        validationSchema={schema}>
        <ScrollView>
          <Header title="بحث" />
          <RegionPicker data={region} />
          <Picker
            placeholder="الاطباق"
            name="dishes"
            list={arrImages}
            chevronDirection="left"
            isRadio={false}
          />
          <Picker
            placeholder="الخدمات"
            name="services"
            list={services}
            chevronDirection="left"
            isRadio={false}
            isServices
          />
          <Text style={styles.text}>خدمة التوصيل</Text>

          <RadioGroup
            radioButtons={radioButtonsData}
            onPress={btn => console.log(btn)}
            labelStyle={{fontFamily: 'Cairo-Bold'}}
            layout="row"
            containerStyle={{fontFamily: 'Cairo-Bold'}}
          />
          <Title text="النتيجة" titleStyle={{marginVertical: 20}} />
          <View style={{backgroundColor: 'red', flex: 1}}></View>
        </ScrollView>
      </Form>
    </Background>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container1: {alignItems: 'center', flexDirection: 'row'},
  text: {
    fontFamily: 'Cairo-Bold',
    paddingVertical: 15,
    fontSize: 16,
  },
  textStyle: {fontFamily: 'Cairo-SemiBold', justifyContent: 'center'},
});
