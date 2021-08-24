import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Background from '../Components/Background';
import ChefInfo from '../Components/ChefInfo';
import Header from '../Components/Header';
import Input from '../Components/Input';
import Form from '../Components/AppForm';
import DateTimePicker from '../Components/DateTimePicker';
import * as yup from 'yup';
import Picker from '../Components/Picker';
import ConfirmationButton from '../Components/ConfirmationButton';

const AddOrderScreen = () => {
  const ChefData = {
    id: 1,
    name: 'علي عبد الله',
    place: 'مكه المكرمة',
    location: 'منطقة باب المنارة',
    numberOfRequests: 30,
    rating: '3.2',
    liked: false,
  };
  const [chefData, setChefData] = useState(ChefData);
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
  const setIsLiked = () => {
    setChefData({...chefData, liked: !chefData.liked});
  };
  const schema = yup.object().shape({
    orderAdress: yup.string().required('الرجاء إدخال عنوان الطلب'),
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
    country: yup.object().required('الرجاء إدخال المدينة').nullable(),
    region: yup.object().required('الرجاء إدخال المنطقة').nullable(),
  });

  return (
    <Background isInverted>
      <Header title="إضافة طلب" />
      <ChefInfo
        data={chefData}
        isRecent={false}
        isLiked={chefData.liked}
        setLiked={setIsLiked}
        withBorder
      />
      <Form
        initialValues={{
          orderAdress: '',
          services: [],
          dishes: [],
          country: null,
          region: null,
        }}
        onSubmit={values => console.log(values)}
        validationSchema={schema}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input name="orderAdress" label="عنوان الطلب" />
          <Picker
            placeholder="الاطباق"
            name="dishes"
            list={arrImages}
            chevronDirection="left"
            isRadio={false}
            isServices={false}
          />
          <Picker
            placeholder="الخدمات"
            name="services"
            list={services}
            chevronDirection="left"
            isRadio={false}
            isServices
          />
          <Picker placeholder="المدينة" name="country" list={list} />
          <Picker placeholder="المنطقة" name="region" list={list} />
          <DateTimePicker name="DateTime" placeholder="التاريخ و الوقت" />

          <ConfirmationButton />
        </ScrollView>
      </Form>
    </Background>
  );
};

export default AddOrderScreen;

const styles = StyleSheet.create({});
