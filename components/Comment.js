import React from 'react';
import {View, Image} from 'react-native';
import RoundIcon from './RoundIcon';
import Title from './Title';

const Comment = ({EvaluationData: {comments}}) => {
  const fullStar = require('../assets/images/starIcon.png');
  const emptyStar = require('../assets/images/starIconEmpty.png');
  const userIconColor = [
    {
      background: '#E5E2E3',
      icon: '#006CB4',
    },
    {
      background: '#FDD5D1',
      icon: '#EB1C3F',
    },
    {
      background: '#F3E3D9',
      icon: '#8A653A',
    },
  ];
  let arrRating;
  const displayStars = starNumbers => {
    arrRating = [];
    for (let i = 0; i < starNumbers; i++) {
      arrRating.push(fullStar);
    }
    for (let i = 0; i < 5 - starNumbers; i++) {
      arrRating.push(emptyStar);
    }
  };

  {
    return comments.map((comment, idx) => (
      <View key={idx} style={{flex: 1, padding: 15}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '20%'}}>
            <RoundIcon
              title="user"
              solid
              bgColor={userIconColor[idx % userIconColor.length].background}
              color={userIconColor[idx % userIconColor.length].icon}
              withShadow={false}
            />
          </View>
          <View style={{width: '80%'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-start',
                }}>
                <Title
                  text={comment.name}
                  titleStyle={{
                    marginTop: 0,
                    fontSize: 14,
                    color: 'black',
                    fontFamily: 'Cairo-Bold',
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                }}>
                {displayStars(comment.rating)}
                {arrRating.map((el, idx) => (
                  <Image key={idx} style={{marginHorizontal: 2}} source={el} />
                ))}
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'flex-start'}}>
              <Title
                text={comment.timeStamp}
                titleStyle={{
                  marginTop: 2,
                  fontSize: 14,
                  color: '#707070',
                  fontFamily: 'Cairo-semiBold',
                }}
              />
            </View>
          </View>
        </View>
        <View>
          {comment.content && (
            <Title
              text={comment.content}
              titleStyle={{
                color: 'black',
                fontSize: 15,
                fontFamily: 'Cairo-semiBold',
                marginTop: 3,
              }}
            />
          )}
        </View>
      </View>
    ));
  }
};

export default Comment;
