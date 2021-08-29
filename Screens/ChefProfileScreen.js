import React, {useState} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import * as yup from 'yup';
import Background from '../Components/Background';
import ChefProfileContact from '../Components/ChefProfileContact';
import ChefInfo from '../Components/ChefInfo';
import ListingItemSeperator from '../Components/ListingItemSeperator';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomChefNavigation from '../Components/CustomChefNavigation';
import FoodPhotos from '../Components/FoodPhotos';
import Evaluation from '../Components/Evaluation';
import About from '../Components/About';
import Modal from 'react-native-modal';
import RoundIcon from '../Components/RoundIcon';
import Title from '../Components/Title';
import LargeTextInput from '../Components/LargeTextInput';
import ImageInputList from '../Components/ImageInputList';
import Form from '../Components/AppForm';
import ConfirmationButton from '../Components/ConfirmationButton';

const ChefProfileScreen = () => {
  const ChefData = {
    chefInfo: {
      id: 1,
      name: 'علي عبد الله',
      place: 'مكه المكرمة',
      location: 'منطقة باب المنارة',
      numberOfRequests: 15,
      rating: '3.2',
      liked: false,
    },
    platePhotos: [
      {name: 'إسم الطبق', url: require('../assets/images/photo1.jpg')},
      {name: 'إسم الطبق', url: require('../assets/images/photo2.jpg')},
      {name: 'إسم الطبق', url: require('../assets/images/photo3.jpg')},
      {name: 'إسم الطبق', url: require('../assets/images/photo1.jpg')},
    ],
    about: {
      countryName: 'الرياض',
      location: 'منطقة الرياض',
      services: [
        'خدمات',
        'خدمات',
        'خدمات',
        'خدمات',
        'خدمات',
        'خدمات',
        'خدمات',
        'خدمات',
        'خدمات',
        'خدمات',
      ],
      delivryServices: ['طبخ عن بعد', 'الطبخ مع التوصيل', 'الطبخ عند العميل'],
    },
    evaluation: {
      overallRating: 4.3,
      comments: [
        {
          name: 'الحسن بن المختار',
          rating: 4,
          timeStamp: 'منذ 3 ساعات',
          content:
            'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير',
        },
        {
          name: 'محسن علي الهادي',
          rating: 3,
          timeStamp: '21-10-2021',
        },
        {
          name: 'مروان أيّوب',
          rating: 2,
          timeStamp: '21-10-2021',
          content:
            'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير',
        },
        {
          name: 'مروان أيّوب',
          rating: 2,
          timeStamp: '21-10-2021',
          content:
            'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير',
        },
        {
          name: 'محسن علي الهادي',
          rating: 3,
          timeStamp: '21-10-2021',
        },
      ],
      totalRatingNumber: 252,
      ratings: [
        {value: 190000, type: '5'},
        {value: 90000, type: '4'},
        {value: 5500, type: '3'},
        {value: 1000, type: '2'},
        {value: 1500, type: '1'},
      ],
    },
  };

  const [isVisible, setIsVisible] = useState(false);
  const [biggerModal, setbiggerModal] = useState(false);
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = uri => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = uri => {
    setImageUris(imageUris.filter(imageuri => imageuri !== uri));
  };

  const showModal = () => {
    setIsVisible(!isVisible);
  };

  const [chefData, setChefData] = useState(ChefData['chefInfo']);
  const setIsLiked = () => {
    setChefData({...chefData, liked: !chefData.liked});
  };

  const Tab = createMaterialTopTabNavigator();
  const schema = yup.object().shape({
    complaintText: yup.string().required('الرجاء إدخال نص الشكوى'),
  });

  return (
    <>
      <Background isInverted>
        <ChefProfileContact showModal={showModal} />
        <ListingItemSeperator height={45} />
        <ChefInfo
          data={chefData}
          isRecent={false}
          isLiked={chefData.liked}
          setLiked={setIsLiked}
          withBorder
        />
        <Tab.Navigator
          tabBar={props => (
            <CustomChefNavigation
              {...props}
              PagesName={['صور الأطباق', 'تقييم', 'فيما يتعلق']}
            />
          )}
          tabBarOptions={{
            showLabel: false,
          }}
          swipeVelocityImpact={0.4}
          sceneContainerStyle={{
            backgroundColor: 'transparent',
          }}
          backBehavior="history"
          initialRouteName="FoodPhoto">
          <Tab.Screen
            name="FoodPhoto"
            children={() => (
              <FoodPhotos platePhotos={ChefData['platePhotos']} />
            )}
          />
          <Tab.Screen
            name="Evaluation"
            children={() => (
              <Evaluation EvaluationData={ChefData['evaluation']} />
            )}
          />
          <Tab.Screen
            name="About"
            children={() => (
              <About
                platePhotos={ChefData['platePhotos']}
                about={ChefData['about']}
              />
            )}
          />
        </Tab.Navigator>
      </Background>
      <View>
        <Modal
          style={styles.modal}
          visible={isVisible}
          animationType="slide"
          backdropOpacity={0}
          animationInTiming={100}
          propagateSwipe={true}
          hideModalContentWhileAnimating={true}
          useNativeDriver
          onSwipeComplete={() => setIsVisible(false)}
          swipeDirection="down"
          onBackButtonPress={() => setIsVisible(false)}>
          <React.Fragment>
            <View style={styles.list}>
              <View
                style={{
                  width: 50,
                  borderRadius: 4,
                  height: 9,
                  backgroundColor: '#CCCCCC',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              />
              <TouchableWithoutFeedback
                onPress={() => {
                  setIsVisible(false);
                  setbiggerModal(true);
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    marginLeft: 10,
                  }}>
                  <RoundIcon
                    withShadow={false}
                    size={27}
                    bgColor="#E5E5E5"
                    title="alert-circle"
                    isFontAwesome={false}
                  />
                  <Title
                    text="إرسال شكوى"
                    titleStyle={{
                      fontSize: 16,
                      color: 'black',
                      paddingRight: 9,
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </React.Fragment>
        </Modal>
      </View>
      {/* the second modal */}
      <Form
        initialValues={{
          complaintText: '',
        }}
        onSubmit={values => console.log(values)}
        validationSchema={schema}>
        <View>
          <Modal
            style={styles.modal2}
            visible={biggerModal}
            animationType="slide"
            backdropOpacity={0}
            animationInTiming={100}
            propagateSwipe={true}
            hideModalContentWhileAnimating={true}
            useNativeDriver
            onSwipeComplete={() => setbiggerModal(false)}
            swipeDirection="down"
            onBackButtonPress={() => setbiggerModal(false)}>
            <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
              <React.Fragment>
                <View style={styles.list2}>
                  <View
                    style={{
                      width: 50,
                      borderRadius: 4,
                      height: 9,
                      backgroundColor: '#CCCCCC',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}
                  />
                  <Title
                    text="تفاصيل الشكوى"
                    titleStyle={{marginTop: 30, color: 'black', fontSize: 15}}
                  />
                  <ListingItemSeperator vertical={false} />
                  <LargeTextInput name="complaintText" />
                  <View style={styles.imageInput}>
                    <ImageInputList
                      imageUris={imageUris}
                      onAddImage={uri => handleAdd(uri)}
                      onRemoveImage={handleRemove}
                    />
                  </View>
                  <ConfirmationButton
                    label="ارسال الشكوى"
                    onPress={() => setbiggerModal(false)}
                  />
                </View>
              </React.Fragment>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </Form>
    </>
  );
};

export default ChefProfileScreen;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    margin: 0,
    alignItems: undefined,
    justifyContent: 'flex-end',
  },
  list: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    height: '13%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    overflow: 'hidden',
    padding: 15,
  },
  modal2: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    margin: 0,
    alignItems: undefined,
    justifyContent: 'flex-end',
  },
  list2: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    overflow: 'hidden',
    padding: 15,
  },
  imageInput: {
    padding: 13,
  },
});
