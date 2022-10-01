import React, {useState} from 'react';
import {View} from 'react-native';
import Rating from 'react-native-easy-rating';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';

const Ratings = ({name = ''}) => {
  const {setFieldValue, errors, values} = useFormikContext();

  return (
    <>
      <View style={{alignItems: 'center', marginVertical: 14}}>
        <View
          style={{
            width: '65%',
          }}>
          <Rating
            rating={values.name}
            max={5}
            iconWidth={38}
            iconHeight={38}
            onRate={rating => setFieldValue(name, rating)}
            iconSelected={require('../assets/images/FullStar.png')}
            iconUnselected={require('../assets/images/EmptyStar.png')}
            style={{justifyContent: 'space-around'}}
          />
        </View>
      </View>
      <ErrorMessage error={errors[name]} />
    </>
  );
};

export default Ratings;
