import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import RadioButtonRN from './RadioButtonRN';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Title from './Title';
const ItemRadioBtn = ({title = '', data}) => {
  return (
    <>
      <Title
        text={title}
        titleStyle={{
          marginBottom: 20,
          fontSize: 20,
          marginLeft: 25,
        }}
      />
      <ScrollView>
        <RadioButtonRN
          data={data}
          textStyle={styles.textStyle}
          box={false}
          initial={1}
          selectedBtn={() => console.log()}
          icon={<Icon name="radio-button-checked" size={26} color="#FF6B21" />}
        />
      </ScrollView>
    </>
  );
};

export default ItemRadioBtn;

const styles = StyleSheet.create({
  textStyle: {fontFamily: 'Cairo-SemiBold'},
});
