import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Comment from './Comment';

const Evaluation = ({EvaluationData}) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <Comment EvaluationData={EvaluationData} />
    </ScrollView>
  );
};

export default Evaluation;
