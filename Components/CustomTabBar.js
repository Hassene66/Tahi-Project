import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Title from './Title';

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        margin: 20,
        marginTop: 10,
        borderRadius: 40,
        overflow: 'hidden',
        ...Platform.select({
          ios: {
            shadowColor: 'red',
            shadowOffset: {height: 7, width: 7},
            shadowOpacity: 1,
            shadowRadius: 10,
          },
          android: {
            elevation: 10,
            shadowColor: 'red',
          },
        }),
      }}>
      <LinearGradient
        colors={['#FF6C25', '#FF832C', '#FF8F2F', '#FF9A32', '#FFA034']}
        start={{x: 0.2, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={styles.tabBar}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const {options} = descriptors[route.key];
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => onPress()}
                testID={options.tabBarTestID}
                accessibilityRole="button">
                <View>
                  {index === 0 && (
                    <View>
                      {isFocused ? (
                        <View
                          style={{
                            width: Dimensions.get('window').width / 4 + 9,
                            height: 50,
                            backgroundColor: '#FABD30',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: 11,
                            borderRadius: 30,
                            flexDirection: 'row',
                          }}>
                          <Feather name="home" size={27} color="white" />
                          <Title
                            text="الرئيسية"
                            titleStyle={{
                              marginTop: 0,
                              fontSize: 13,
                              color: 'white',
                              paddingHorizontal: 6,
                            }}
                          />
                        </View>
                      ) : (
                        <Feather name="home" size={27} color="#FFD6B9" />
                      )}
                    </View>
                  )}

                  {index === 1 && (
                    <View>
                      {isFocused ? (
                        <View
                          style={{
                            width: Dimensions.get('window').width / 4 + 9,
                            height: 50,
                            backgroundColor: '#FABD30',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: 11,
                            borderRadius: 30,
                            flexDirection: 'row',
                          }}>
                          <FontAwesome5
                            name="comment-alt"
                            size={24}
                            color="white"
                          />
                          <Title
                            text="محادثات"
                            titleStyle={{
                              marginTop: 0,
                              fontSize: 13,
                              color: 'white',
                              paddingHorizontal: 6,
                            }}
                          />
                        </View>
                      ) : (
                        <FontAwesome5
                          name="comment-alt"
                          size={27}
                          color="#FFD6B9"
                        />
                      )}
                    </View>
                  )}

                  {index === 2 && (
                    <View>
                      {isFocused ? (
                        <View
                          style={{
                            width: Dimensions.get('window').width / 4 + 9,
                            height: 50,
                            backgroundColor: '#FABD30',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: 11,
                            borderRadius: 30,
                            flexDirection: 'row',
                          }}>
                          <FontAwesome5
                            name="newspaper"
                            size={24}
                            color="white"
                          />
                          <Title
                            text="طلباتي"
                            titleStyle={{
                              marginTop: 0,
                              fontSize: 13,
                              color: 'white',
                              paddingHorizontal: 6,
                            }}
                          />
                        </View>
                      ) : (
                        <FontAwesome5
                          name="newspaper"
                          size={27}
                          color="#FFD6B9"
                        />
                      )}
                    </View>
                  )}

                  {index === 3 && (
                    <View>
                      {isFocused ? (
                        <View
                          style={{
                            width: Dimensions.get('window').width / 4 + 9,
                            height: 50,
                            backgroundColor: '#FABD30',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: 11,
                            borderRadius: 30,
                            flexDirection: 'row',
                          }}>
                          <FontAwesome5 name="user" size={24} color="white" />
                          <Title
                            text="الإعدادات"
                            titleStyle={{
                              marginTop: 0,
                              fontSize: 13,
                              color: 'white',
                              paddingHorizontal: 6,
                            }}
                          />
                        </View>
                      ) : (
                        <FontAwesome5 name="user" size={27} color="#FFD6B9" />
                      )}
                    </View>
                  )}
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    padding: 15,
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        shadowColor: 'red',
        shadowOffset: {height: 7, width: 7},
        shadowOpacity: 1,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
        shadowColor: 'red',
      },
    }),
  },
});

export default CustomTabBar;
