import React from 'react';
import {View, StyleSheet} from 'react-native';

const ListingItemSeperator = () => {
  return <View style={styles.seperator} />;
};
const styles = StyleSheet.create({
  seperator: {
    width: 10,
    height: '100%',
  },
});

export default ListingItemSeperator;
