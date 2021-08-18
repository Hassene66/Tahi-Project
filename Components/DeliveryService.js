import React from 'react';
import {View} from 'react-native';
import Title from './Title';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DeliveryService = ({serviceName = ''}) => {
  return (
    <View style={{flexDirection: 'row'}}>
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
