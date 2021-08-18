import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RoundIcon from './RoundIcon';
import Title from './Title';

const Evaluation = () => {
  return (
    <View style={{flex: 1, padding: 15}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '20%', backgroundColor: 'dodgerblue'}}>
          <RoundIcon title="user" solid bgColor="#F3E3D9" color="#8A653A" />
        </View>
        <View style={{width: '80%', backgroundColor: 'tomato'}}>
          <View
            style={{flex: 1, backgroundColor: 'salmon', flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'red',
                alignItems: 'flex-start',
              }}>
              <Title
                text="الحسن بن المختار"
                titleStyle={{
                  marginTop: 0,
                  fontSize: 15,
                  color: 'black',
                  fontFamily: 'Cairo-semiBold',
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'pink',
                alignItems: 'flex-end',
              }}>
                
              </View>
          </View>
          <View style={{flex: 1, backgroundColor: 'gold'}}></View>
        </View>
      </View>
    </View>
  );
};

export default Evaluation;
