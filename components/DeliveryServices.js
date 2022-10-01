import React, {useState} from 'react';
import RadioGroup from '../lib/react-native-radio-buttons-group';
import uuid from 'react-native-uuid';
import {useFormikContext} from 'formik';
import ErrorMessage from '../Components/ErrorMessage';

const DeliveryServices = ({name = 'deliveryService'}) => {
  const radioButtonsData = [
    {
      id: uuid.v4(),
      label: 'الطبخ  عن بعد',
      value: 'الطبخ  عن بعد',
    },
    {
      id: uuid.v4(),
      label: 'الطبخ مع التوصيل',
      value: 'الطبخ مع التوصيل',
    },
    {
      id: uuid.v4(),
      label: 'الطبخ عند العميل',
      value: 'الطبخ عند العميل',
    },
  ];
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const {setFieldValue, errors} = useFormikContext();
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    setFieldValue(name, radioButtonsArray);
  }
  return (
    <>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        labelStyle={{fontFamily: 'Cairo-Bold'}}
        layout="row"
        containerStyle={{fontFamily: 'Cairo-Bold'}}
      />
      <ErrorMessage error={errors[name]} />
    </>
  );
};

export default DeliveryServices;
