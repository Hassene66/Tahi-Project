import React from 'react';
import {View, StyleSheet} from 'react-native';

const ListingItemSeperator = ({vertical, width = 10, height = 18}) => {
  const styles = StyleSheet.create({
    seperator: {
      width: vertical ? width : '100%',
      height: vertical ? '100%' : height,
    },
  });
  return <View style={styles.seperator} />;
};

export default ListingItemSeperator;
