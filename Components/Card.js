import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
  ScrollView,
} from 'react-native';
import Background from './Background';
import RoundIcon from './RoundIcon';
import Title from './Title';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Card = () => {
  const [liked, setLiked] = useState(false);
  return (
    <View
      // the card view
      style={{
        backgroundColor: 'white',
        borderRadius: 30,
        borderColor: '#FABD30',
        width: 380,
        height: 260,
        borderWidth: 2,
        overflow: 'hidden',
        padding: 18,
      }}>
      <View
        // the user view
        style={{
          height: 90,
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
                text="علي عبد الله"
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
              <Text style={{color: '#FF6B21', paddingLeft: 6}}>4,4</Text>
              <FontAwesome5 name="star" color="#FF6B21" size={22} solid />
            </View>
            <View
              style={{
                width: '10%',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
              }}>
              <TouchableWithoutFeedback onPress={() => setLiked(!liked)}>
                <FontAwesome5
                  name="heart"
                  color={liked ? 'red' : 'black'}
                  size={25}
                  solid={liked}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
          {/* bottom green row */}
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'flex-start',
            }}>
            <View style={{flex: 1}}>
              <Text>مكه المكرمة</Text>
            </View>
            <View
              style={{
                flex: 2,
                alignItems: 'center',
              }}>
              <Text>منطقة باب المنارة</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={{color: '#FF6B21'}}>(15 طلب)</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 30,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            backgroundColor: '#EFFCFF',
            borderRadius: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
          }}>
          <Title
            text="المفطح"
            titleStyle={{marginTop: 0, color: '#30D2FA', fontSize: 12}}
          />
        </View>
        <View
          style={{
            backgroundColor: '#EFFCFF',
            borderRadius: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
          }}>
          <Title
            text="الكبسة"
            titleStyle={{marginTop: 0, color: '#30D2FA', fontSize: 12}}
          />
        </View>
        <View
          style={{
            backgroundColor: '#EFFCFF',
            borderRadius: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
          }}>
          <Title
            text="الكبسة"
            titleStyle={{marginTop: 0, color: '#30D2FA', fontSize: 12}}
          />
        </View>
        <View
          style={{
            backgroundColor: '#EFFCFF',
            borderRadius: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
          }}>
          <Title
            text="المعصوب"
            titleStyle={{marginTop: 0, color: '#30D2FA', fontSize: 12}}
          />
        </View>
        <View
          style={{
            backgroundColor: '#EFFCFF',
            borderRadius: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
          }}>
          <Title
            text=". . ."
            titleStyle={{
              marginTop: 0,
              color: '#30D2FA',
              fontSize: 12,
              fontWeight: 'bold',
            }}
          />
        </View>
      </View>
      <ScrollView horizontal>
        <View
          style={{
            flexDirection: 'row',
            padding: 13,
            justifyContent: 'space-between',
          }}>
          <View style={styles.images}>
            <Image
              resizeMode="contain"
              source={require('../assets/images/image1.png')}
            />
          </View>
          <View style={styles.images}>
            <Image
              resizeMode="contain"
              source={require('../assets/images/image2.png')}
            />
          </View>
          <View style={styles.images}>
            <Image
              resizeMode="contain"
              source={require('../assets/images/image3.png')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  images: {borderRadius: 9, height: 80, width: 100, overflow: 'hidden'},
});

export default Card;
