import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import Form from '../Components/AppForm';
import Background from '../Components/Background';
import Header from '../Components/Header';
import Picker from '../Components/Picker';
import uuid from 'react-native-uuid';
import RegionPicker from '../Components/RegionSearch';
import Title from '../Components/Title';
import RadioGroup from '../lib/react-native-radio-buttons-group';
import SearchResult from '../Components/SearchResult';
const SearchScreen = () => {
  const region = [
    {id: 1, label: 'الطائف'},
    {id: 2, label: 'الدمام'},
    {id: 3, label: 'تونس'},
    {id: 4, label: 'مدينة الخبر'},
    {id: 5, label: 'تبوك'},
    {id: 6, label: 'جدة'},
    {id: 7, label: 'المدينة المنورة'},
    {id: 8, label: 'الأحساء'},
    {id: 9, label: 'مكه المكرمة'},
    {id: 10, label: 'الدمام'},
    {id: 11, label: 'بريدة'},
    {id: 12, label: 'مدينة الخبر'},
    {id: 13, label: 'تونس'},
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
  const searchResults = [
    {
      id: uuid.v4(),
      name: 'علي عبد الله',
      place: 'مكه المكرمة',
      location: 'منطقة باب المنارة',
      numberOfRequests: 15,
      tags: ['المفطح', 'الكبسة', 'المعصوب'],
      imageUrls: [
        require('../assets/images/image1.png'),
        require('../assets/images/image2.png'),
        require('../assets/images/image3.png'),
      ],
      rating: '4.4',
      liked: true,
      deliveryService: 'الطبخ عند العميل',
    },
    {
      id: uuid.v4(),
      name: 'حسَان أيّوب',
      place: 'تونس',
      location: 'المهدية',
      numberOfRequests: 7,
      tags: ['لازانيا', 'مقرونة', 'كسكسي', 'مقرونة'],
      imageUrls: [
        require('../assets/images/image1.png'),
        require('../assets/images/image2.png'),
        require('../assets/images/image3.png'),
      ],
      rating: '3.9',
      liked: true,
      deliveryService: 'الطبخ عند العميل',
    },
    {
      id: uuid.v4(),
      name: 'مروان أيّوب',
      place: 'تونس',
      location: 'المهدية',
      numberOfRequests: 7,
      tags: ['لازانيا', 'مقرونة', 'كسكسي', 'مقرونة'],
      imageUrls: [
        require('../assets/images/image1.png'),
        require('../assets/images/image2.png'),
        require('../assets/images/image3.png'),
      ],
      rating: '3.9',
      liked: true,
      deliveryService: 'طبخ عن بعد',
    },
    {
      id: uuid.v4(),
      name: 'مروان أيّوب',
      place: 'تونس',
      location: 'المهدية',
      numberOfRequests: 7,
      tags: ['لازانيا', 'مقرونة', 'كسكسي', 'مقرونة'],
      imageUrls: [
        require('../assets/images/image1.png'),
        require('../assets/images/image2.png'),
        require('../assets/images/image3.png'),
      ],
      rating: '3.9',
      liked: true,
      deliveryService: 'الطبخ مع التوصيل',
    },
  ];

  return (
    <Background isInverted>
      <Form
        initialValues={{
          region: '',
          searchForChef: '',
          services: [],
          dishes: [],
        }}
        onSubmit={values => console.log(values)}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header title="بحث" />
          <RegionPicker data={region} />
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
          <Text style={styles.text}>خدمة التوصيل</Text>

          <RadioGroup
            radioButtons={radioButtonsData}
            onPress={btn => console.log(btn)}
            labelStyle={{fontFamily: 'Cairo-Bold'}}
            layout="row"
            containerStyle={{fontFamily: 'Cairo-Bold'}}
          />
          <Title text="النتيجة" titleStyle={{marginVertical: 20}} />
          <SearchResult data={searchResults} />
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
