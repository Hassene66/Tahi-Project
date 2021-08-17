import React from 'react';
import {StyleSheet, View} from 'react-native';
import PreviousPageNavigation from './PreviousPageNavigation';
import Title from './Title';
const Header = ({title = 'لوريم ايبسوم ', style = {}}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={{flex: 1}}>
        <PreviousPageNavigation />
      </View>
      <View>
        <Title text={title} titleStyle={styles.title} />
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
  },
});
