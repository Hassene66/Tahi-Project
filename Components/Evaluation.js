import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Evaluation = () => {
  return (
    <View style={{flex: 1, padding: 15}}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: '40%',
            alignItems: 'center',
          }}>
          <View style={{height: 40, backgroundColor: 'green'}}></View>
        </View>
        <View
          style={{
            width: '60%',
            backgroundColor: 'dodgerblue',
            alignItems: 'center',
          }}>
          <Text>the statistical rating</Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default Evaluation;
