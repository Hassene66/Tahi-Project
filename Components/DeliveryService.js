import React from 'react';
import {View} from 'react-native';
import Title from './Title';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import uuid from 'react-native-uuid';
const DeliveryService = ({serviceName = ''}) => {
  return (
    <View key={uuid.v4()} style={{flexDirection: 'row'}}>
      <View>
        <MaterialIcons name="check-circle" size={25} color="#FF6B21" />
      </View>
      <View>
        <Title
          text={serviceName}
          titleStyle={{
            marginTop: 1,
            color: 'black',
            fontSize: 13,
            fontFamily: 'Cairo-SemiBold',
            fontWeight: '200',
            paddingRight: 7,
          }}
        />
      </View>
    </View>
  );
};

export default DeliveryService;
