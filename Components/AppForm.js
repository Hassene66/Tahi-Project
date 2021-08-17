import React from 'react';
import {Formik} from 'formik';
const AppForm = ({initialValues, onSubmit, validationSchema, children}) => {
  return (
    <Formik
      validateOnChange={false}
      isInitialValid={validationSchema.isValidSync(initialValues)}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
