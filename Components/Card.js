import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import RoundIcon from './RoundIcon';
import Title from './Title';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import uuid from 'react-native-uuid';

const Card = ({data: item, isRecent, isLiked, setLiked, withBorder}) => {
  return (
    <View
      // the card view
      style={{
        backgroundColor: 'white',
        width: Math.floor(Dimensions.get('window').width - 36),
        height: isRecent ? 270 : 240,
        borderRadius: 30,
        borderWidth: withBorder ? 2 : 0,
        borderColor: '#FABD30',
        overflow: 'hidden',
        padding: 18,
      }}>
      <View
        // the user view
        style={{
          height: isRecent ? 110 : 75,
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
            <View style={{flex: 1}}>
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
              height: 20,
              alignItems: 'flex-start',
              marginBottom: 10,
            }}>
            <View style={{}}>
              <Text
                style={{
                  fontFamily: 'Cairo-Regular',
                  fontSize: 12,
                  paddingHorizontal: 5,
                }}>
                {item.place} <Text style={{color: '#CCCCCC'}}>|</Text>
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-start',
              }}>
              <Text style={{fontFamily: 'Cairo-Regular', fontSize: 12}}>
                {item.location}
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text
                style={{
                  color: '#FF6B21',
                  fontFamily: 'Cairo-Regular',
                  fontSize: 12,
                }}>
                (طلب {item.numberOfRequests})
              </Text>
            </View>
          </View>
          {isRecent && (
            <View
              style={{flexDirection: 'row', marginBottom: isRecent ? 9 : 0}}>
              <FontAwesome5 name="clock" size={20} style={{marginRight: 7}} />
              <Text style={{fontFamily: 'Cairo-Regular', fontSize: 12}}>
                منذ 3 ساعات
              </Text>
            </View>
          )}
        </View>
      </View>
      <View
        style={{
          height: 30,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {item.tags.map(tag => (
          <View
            key={uuid.v4()}
            style={{
              backgroundColor: '#EFFCFF',
              borderRadius: 10,
              paddingHorizontal: 10,
              justifyContent: 'center',
            }}>
            <Title
              text={tag}
              titleStyle={{marginTop: 0, color: '#30D2FA', fontSize: 12}}
            />
          </View>
        ))}
        {item.tags.length > 5 && (
          <View
            style={{
              backgroundColor: '#EFFCFF',
              borderRadius: 10,
              paddingHorizontal: 10,
              justifyContent: 'center',
            }}>
            <Title
              text="..."
              titleStyle={{marginTop: 0, color: '#30D2FA', fontSize: 12}}
            />
          </View>
        )}
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            padding: 13,
            justifyContent: 'space-between',
          }}>
          {item.imageUrls.map(url => (
            <View key={uuid.v4()} style={styles.images}>
              <Image resizeMode="contain" source={url} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  images: {borderRadius: 9, height: 80, width: 100, overflow: 'hidden'},
});

export default Card;
