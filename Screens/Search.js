import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Background from '../Components/Background';
import Title from '../Components/Title';

const Search = () => {
  return (
    <Background isInverted>
      <View style={{alignItems: 'center'}}>
        <Title text="بحث" style={styles.title} />
      </View>
    </Background>
  );
};

export default Search;

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
  },
});
