import React from 'react';
import {ScrollView, View} from 'react-native';
import Comment from './Comment';
import OverallRating from './OverallRating';
import uuid from 'react-native-uuid';

const Evaluation = ({EvaluationData}) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View>
        <OverallRating key={uuid.v4()} Rating={EvaluationData} />
        <Comment EvaluationData={EvaluationData} />
      </View>
    </ScrollView>
  );
};

export default Evaluation;
