import React from 'react';
import {Formik} from 'formik';
const AppForm = ({initialValues, onSubmit, validationSchema, children}) => {
  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
