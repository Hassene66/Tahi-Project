import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import uuid from 'react-native-uuid';
import LinearGradient from 'react-native-linear-gradient';
import {filter} from 'smart-array-filter/src';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ItemRadioBtn from './ItemRadioBtn';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';
import CheckBox from 'react-native-check-box';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Title from './Title';
import FoodGrid from './FoodGrid';
import {ScrollView} from 'react-native-gesture-handler';
const Picker = ({
  placeholder = 'لوريم ايبسوم ',
  name,
  list = [],
  chevronDirection = 'down',
  isRadio = true,
  isServices = false,
}) => {
  const {setFieldValue, errors, values} = useFormikContext();
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(list);
  const [selectedItem, setSelectedItem] = useState('');
  const onSelectItem = item => {
    setSelectedItem(item);
    setTimeout(() => {
      setIsVisible(false);
    }, 170);
  };
  const handleCheck = id => {
    return data.map(el => {
      if (el.id === id) return {...el, checked: !el.checked};
      return el;
    });
  };
  let filteredData = filter(data, {
    keywords: `label:${searchTerm}`,
    caseSensitive: false,
  });
  const getSelectedData = () => data.filter(el => el.checked);
  const uncheckService = id => {
    setData(() =>
      data.map(el => {
        if (el.id === id) return {...el, checked: false};
        return el;
      }),
    );
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
        <View style={[styles.container, errors[name] && styles.error]}>
          {isRadio
            ? [
                <Text key={uuid.v4()} style={styles.title}>
                  {placeholder}
                </Text>,
                selectedItem ? (
                  <Text key={uuid.v4()} style={styles.subTitle}>
                    {selectedItem.label}
                  </Text>
                ) : (
                  <Text key={uuid.v4()} style={styles.subTitle}>
                    {placeholder}
                  </Text>
                ),
              ]
            : [
                getSelectedData().length !== 0 && (
                  <Text key={uuid.v4()} style={styles.title}>
                    {placeholder}
                  </Text>
                ),
                getSelectedData().length === 0 ? (
                  <Text key={uuid.v4()} style={styles.subTitle}>
                    {placeholder}
                  </Text>
                ) : (
                  [
                    <View
                      key={uuid.v4()}
                      style={{
                        flexDirection: 'row',
                        width: '85%',
                        justifyContent: 'flex-start',
                      }}>
                      <Text
                        numberOfLines={1}
                        style={[styles.subTitle]}
                        key={uuid.v4()}>
                        {getSelectedData().map(el => el.label + ' ,')}
                      </Text>
                    </View>,
                  ]
                ),
              ]}

          <MaterialCommunityIcons
            style={styles.icon}
            name={`chevron-${chevronDirection}`}
            size={23}
          />
        </View>
      </TouchableWithoutFeedback>
      <ErrorMessage error={errors[name]} />

      <View>
        <Modal
          style={styles.modal}
          visible={isVisible}
          animationType="slide"
          backdropOpacity={0}
          animationInTiming={50}
          propagateSwipe={true}
          hideModalContentWhileAnimating={true}
          useNativeDriver
          onSwipeComplete={() => setIsVisible(false)}
          swipeDirection="down"
          onBackButtonPress={() => setIsVisible(false)}>
          {isRadio ? (
            <View style={styles.list}>
              <ItemRadioBtn
                name={name}
                title={placeholder}
                data={list}
                initial={-1}
                onPress={item => {
                  setFieldValue(name, item);
                  onSelectItem(item);
                }}
              />
            </View>
          ) : (
            <View style={styles.list}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 25,
                }}>
                <Title
                  text={isServices ? 'إختر  الخدمات' : 'إختر الاطباق'}
                  titleStyle={styles.titleStyle}
                />
                <TouchableOpacity
                  onPress={() => {
                    setSearchTerm(''), setData(list);
                    values.services = [];
                  }}>
                  <View
                    style={{
                      height: 55,
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignSelf: 'center',
                      paddingHorizontal: 15,
                      marginRight: 10,
                      borderColor: '#707070',
                      borderWidth: 2,
                    }}>
                    <Text style={[styles.btn, {color: 'black'}]}>
                      إعادة ضبط
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsVisible(false)}>
                  <View
                    style={{
                      height: 55,
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <LinearGradient
                      colors={['#FF6921', '#FFD051']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        paddingHorizontal: 15,
                        borderRadius: 10,
                        paddingHorizontal: 30,
                      }}>
                      <Text style={[styles.btn, {color: 'white'}]}>تفعيل</Text>
                    </LinearGradient>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: 65,
                  borderRadius: 10,
                  borderColor: '#CCCCCC',
                  borderWidth: 2,
                  marginVertical: 15,
                  justifyContent: 'center',
                }}>
                <TextInput
                  placeholder={isServices ? 'إسم الخدمات' : 'إسم الطبق'}
                  color="#999999"
                  placeholderTextColor="#999999"
                  style={styles.textInput}
                  onChangeText={text => setSearchTerm(text)}
                  value={searchTerm}
                />
              </View>

              {isServices ? (
                <>
                  <View
                    key={uuid.v4()}
                    style={{
                      flexDirection: 'row',
                    }}>
                    {getSelectedData().map(ser => (
                      <TouchableOpacity
                        key={uuid.v4()}
                        onPress={() => uncheckService(ser.id)}>
                        <View
                          style={{
                            backgroundColor: '#EFFCFF',
                            borderRadius: 15,
                            paddingHorizontal: 10,
                            marginRight: 5,
                            flexDirection: 'row',
                          }}>
                          <Title
                            text="  ✕"
                            titleStyle={{
                              color: '#30D2FA',
                              fontSize: 15,
                              alignSelf: 'center',
                            }}
                          />
                          <Title
                            text={ser.label}
                            titleStyle={{
                              color: '#30D2FA',
                              fontSize: 13,
                              paddingVertical: 5,
                            }}
                          />
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                  <FlatList
                    data={filteredData}
                    keyExtractor={() => uuid.v4()}
                    renderItem={({item}) => (
                      <CheckBox
                        style={{flex: 1, paddingVertical: 10}}
                        rightText={item.label}
                        rightTextStyle={{
                          fontFamily: 'Cairo-SemiBold',
                          fontSize: 17,
                        }}
                        checkedImage={
                          <MaterialIcons
                            name="check-circle"
                            size={25}
                            color="#FF6B21"
                          />
                        }
                        unCheckedImage={
                          <MaterialIcons
                            name="radio-button-unchecked"
                            size={25}
                            color="#707070"
                          />
                        }
                        onClick={() => {
                          setData(() => handleCheck(item.id));
                          setFieldValue(name, handleCheck(item.id));
                        }}
                        isChecked={item.checked}
                      />
                    )}
                  />
                </>
              ) : (
                <>
                  <View
                    key={uuid.v4()}
                    style={{
                      flexDirection: 'row',
                    }}>
                    {getSelectedData().map(ser => (
                      <TouchableOpacity
                        key={uuid.v4()}
                        onPress={() => uncheckService(ser.id)}>
                        <View
                          style={{
                            backgroundColor: '#EFFCFF',
                            borderRadius: 15,
                            paddingHorizontal: 10,
                            marginRight: 5,
                            flexDirection: 'row',
                          }}>
                          <Title
                            text="  ✕"
                            titleStyle={{
                              color: '#30D2FA',
                              fontSize: 15,
                              alignSelf: 'center',
                            }}
                          />
                          <Title
                            text={ser.label}
                            titleStyle={{
                              color: '#30D2FA',
                              fontSize: 13,
                              paddingVertical: 5,
                            }}
                          />
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                  <View style={{flex: 1}}>
                    <FoodGrid
                      name={name}
                      data={filteredData}
                      handleCheck={handleCheck}
                      setData={setData}
                    />
                  </View>
                </>
              )}
            </View>
          )}
        </Modal>
      </View>
    </>
  );
};

export default Picker;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    height: 65,
    padding: 7,
    justifyContent: 'center',
    elevation: 10,
    shadowColor: 'rgba(255,78,54,18)',
  },
  title: {
    paddingRight: 10,
    fontSize: 12,
    fontFamily: 'Cairo-SemiBold',
    color: '#FF6B21',
  },
  subTitle: {
    paddingRight: 10,
    fontSize: 15,
    fontFamily: 'Cairo-SemiBold',
    color: 'black',
  },
  icon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingLeft: 7,
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    margin: 0,
    alignItems: undefined,
    justifyContent: 'flex-end',
  },
  error: {
    borderWidth: 2,
    borderColor: 'red',
  },
  list: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    height: '80%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden',
  },
  titleStyle: {
    marginVertical: 20,
    fontSize: 19,
    flex: 1,
  },
  btn: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
  },
  textInput: {
    fontFamily: 'Cairo-Regular',
    textAlign: 'right',
    fontSize: 17,
    paddingLeft: 20,
  },
});
