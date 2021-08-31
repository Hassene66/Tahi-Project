import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import RoundIcon from './RoundIcon';
import Title from './Title';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ChefInfo = ({data: item, isRecent, isLiked, setLiked}) => {
  return (
    <View style={{padding: 10}}>
      <View
        // the user view
        style={{
          height: isRecent ? 130 : 85,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '17%',
            justifyContent: 'flex-start',
          }}>
          <RoundIcon
            title="user"
            solid
            color="#FABD30"
            bgColor="#FFF8E7"
            size={27}
            withShadow={false}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          {/* top green row */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <View>
              <Title
                text={item.name}
                titleStyle={{
                  fontSize: 17,
                  marginTop: 0,
                  paddingRight: 9,
                  color: 'black',
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingHorizontal: 13,
              }}>
              <Text style={{color: '#FF6B21', paddingLeft: 6}}>
                {item.rating}
              </Text>
              <FontAwesome5 name="star" color="#FF6B21" size={22} solid />
            </View>
            <View
              style={{
                width: '10%',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
              }}>
              <TouchableWithoutFeedback onPress={() => setLiked(item.id)}>
                <FontAwesome5
                  name="heart"
                  color={isLiked ? 'red' : 'black'}
                  size={25}
                  solid={isLiked}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
          {/* bottom green row */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}>
            <View>
              <Text
                style={{
                  fontFamily: 'Cairo-Regular',
                  fontSize: 12,
                  paddingHorizontal: 5,
                }}>
                {item.place}
                {'  '}
                <Text style={{color: '#CCCCCC', fontWeight: 'bold'}}>|</Text>
              </Text>
            </View>
            <View style={{}}>
              <Text
                style={{
                  fontFamily: 'Cairo-Regular',
                  fontSize: 12,
                }}>
                {item.location}
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={{color: '#FF6B21', fontFamily: 'Cairo-SemiBold'}}>
              ({item.numberOfRequests} طلب)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChefInfo;
