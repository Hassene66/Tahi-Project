import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import ItemRadioBtn from './ItemRadioBtn';
import Icon from 'react-native-vector-icons/Feather';
import Title from './Title';
import Search from './Search';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';
const RegionPicker = ({
  name = 'region',
  placeholder = 'المنطقة',
  data = [],
}) => {
  const {setFieldValue} = useFormikContext();

  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const onSelectItem = item => {
    setSelectedItem(item);
    setTimeout(() => {
      setIsVisible(false);
    }, 170);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
          <View style={{flex: 0.35}}>
            <View style={[styles.region]}>
              <View style={{flex: 0.3}}>
                <Icon name="map-pin" size={27} color="white" />
              </View>
              <View style={styles.placeholder}>
                {selectedItem ? (
                  <Title
                    text={selectedItem.label}
                    titleStyle={styles.titleStyle}
                  />
                ) : (
                  <Title text={placeholder} titleStyle={styles.titleStyle} />
                )}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Search />
      </View>

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
          <View style={styles.list}>
            <ItemRadioBtn
              name={name}
              title={placeholder}
              data={data}
              initial={-1}
              onPress={item => {
                setFieldValue(name, item.label);
                onSelectItem(item);
              }}
            />
          </View>
        </Modal>
      </View>
    </>
  );
};

export default RegionPicker;

const styles = StyleSheet.create({
  container: {alignItems: 'center', flexDirection: 'row'},
  modal: {
    margin: 0,
    alignItems: undefined,
    justifyContent: 'flex-end',
    width: '100%',
  },
  region: {
    backgroundColor: '#FF5F22',
    height: 65,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    elevation: 20,
  },
  placeholder: {
    flex: 0.8,
    alignItems: 'center',
  },
  titleStyle: {color: 'white', fontSize: 15},
  list: {
    backgroundColor: 'white',
    height: '60%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
