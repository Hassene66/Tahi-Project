import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomChefNavigation from '../Components/CustomChefNavigation';
import Background from '../Components/Background';
import LogoV3 from '../Components/LogoV3';
import WaitingTab from '../Components/WaitingTab';
import AcceptedTab from '../Components/AcceptedTab';
import DoneTab from '../Components/DoneTab';
import Modal from 'react-native-modal';
import {View, StyleSheet} from 'react-native';
import Title from '../Components/Title';
import Ratings from '../Components/Ratings';
import LargeTextInput from '../Components/LargeTextInput';
import ConfirmationButton from '../Components/ConfirmationButton';
import * as yup from 'yup';
import Form from '../Components/AppForm';
const MyOrdersScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showModal = () => {
    setIsVisible(!isVisible);
  };
  const schema = yup.object().shape({
    evaluationText: yup.string().required('الرجاء إدخال نص تكميلي'),
    rating: yup
      .number()
      .min(0)
      .max(5)
      .nullable()
      .required(' الرجاء إدخال  تقييمك '),
  });
  const Tab = createMaterialTopTabNavigator();
  return (
    <Background isInverted>
      <>
        <LogoV3 />
        <Tab.Navigator
          tabBar={props => (
            <CustomChefNavigation
              {...props}
              PagesName={['في الإنتظار', 'مقبول', 'منتهية']}
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
          initialRouteName="PendingOrderScreen">
          <Tab.Screen
            name="PendingOrderScreen"
            children={() => <WaitingTab />}
          />
          <Tab.Screen
            name="AcceptedOrderScreen"
            children={() => <AcceptedTab />}
          />
          <Tab.Screen
            name="CompletedOrderScreen"
            children={() => <DoneTab showModal={showModal} />}
          />
        </Tab.Navigator>
        <Form
          initialValues={{
            evaluationText: '',
            rating: null,
          }}
          onSubmit={values => console.log(values)}
          validationSchema={schema}>
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
              <Title
                text="كيف هو تقييمك ؟"
                titleStyle={{
                  color: 'black',
                  fontSize: 17,
                  margin: 15,
                  marginVertical: 20,
                }}
              />
              <Ratings name="rating" />
              <View style={{marginVertical: 10}}>
                <LargeTextInput name="evaluationText" placeholder="نص تكميلي" />
              </View>
              <ConfirmationButton
                label="ارسال التقييم"
                onPress={() => setIsVisible(false)}
              />
            </View>
          </Modal>
        </Form>
      </>
    </Background>
  );
};

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
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    overflow: 'hidden',
    padding: 15,
  },
});
export default MyOrdersScreen;
