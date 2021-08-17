import React, {useState} from 'react';
import Modal from 'react-native-modal';
import uuid from 'react-native-uuid';
import LinearGradient from 'react-native-linear-gradient';
import {filter} from 'smart-array-filter/src';
import {
  FlatList,
  ScrollView,
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
const Picker = ({
  placeholder = 'لوريم ايبسوم ',
  name,
  withTitle = true,
  list = [],
  chevronDirection = 'down',
  isRadio = true,
}) => {
  const {setFieldValue, errors} = useFormikContext();
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

  const handleCheck = item => {
    return data.map(el => {
      if (el.id === item.id) return {...el, checked: !el.checked};
      return el;
    });
  };

  const filteredData = filter(data, {
    keywords: `label:${searchTerm}`,
    caseSensitive: true,
  });
  const getSelectedItems = () => data.filter(el => el.checked);
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
                getSelectedItems().length !== 0 && (
                  <Text key={uuid.v4()} style={styles.title}>
                    {placeholder}
                  </Text>
                ),
                getSelectedItems().length === 0 ? (
                  <Text key={uuid.v4()} style={styles.subTitle}>
                    {placeholder}
                  </Text>
                ) : (
                  <View
                    key={uuid.v4()}
                    style={{
                      alignItems: 'flex-end',
                      flexDirection: 'row',
                      width: '85%',
                    }}>
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}>
                      {getSelectedItems().map((el, key) => (
                        <Text
                          style={[styles.subTitle, {alignItems: 'flex-end'}]}
                          key={uuid.v4()}>
                          {el.label + ' ,'}
                        </Text>
                      ))}
                    </ScrollView>
                  </View>
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
                <Title text="إختر  الخدمات" titleStyle={styles.titleStyle} />
                <TouchableOpacity onPress={() => setData(list)}>
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
                      marginRight: 10,
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
                  placeholder="اسم الخدمات"
                  color="#999999"
                  placeholderTextColor="#999999"
                  style={styles.textInput}
                  onChangeText={text => setSearchTerm(text)}
                />
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
                      setData(() => handleCheck(item));
                      setFieldValue(name, handleCheck(item));
                    }}
                    isChecked={item.checked}
                  />
                )}
              />
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
    height: '70%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden',
  },
  titleStyle: {
    marginVertical: 20,
    fontSize: 18,
    marginLeft: 25,
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
