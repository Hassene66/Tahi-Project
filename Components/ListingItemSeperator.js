import React from 'react';
import {View, StyleSheet} from 'react-native';

const ListingItemSeperator = ({vertical}) => {
  const styles = StyleSheet.create({
    seperator: {
      width: vertical ? 10 : '100%',
      height: vertical ? '100%' : 18,
    },
  });
  return <View style={styles.seperator} />;
};

export default ListingItemSeperator;
