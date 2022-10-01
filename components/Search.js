import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFormikContext} from 'formik';

const Search = ({placeholder = 'البحث عن الشيف', name = 'searchForChef'}) => {
  const {submitForm, handleChange} = useFormikContext();
  return (
    <View style={[styles.container]}>
      <View style={styles.searchBox}>
        <TextInput
          placeholder={placeholder}
          color="#999999"
          placeholderTextColor="#999999"
          style={styles.textInput}
          onChangeText={handleChange(name)}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          submitForm();
        }}>
        <View style={styles.icon}>
          <Icon name="search" size={28} color="#464646" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: 'white',
    marginLeft: 10,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    height: 65,
    elevation: 20,
    shadowColor: 'rgba(255,78,54,18)',
  },
  textInput: {
    fontFamily: 'Cairo-Regular',
    textAlign: 'right',
    fontSize: 17,
    paddingLeft: 20,
  },
  icon: {
    paddingRight: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    flex: 3,
    justifyContent: 'center',
  },
});
