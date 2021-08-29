import React from 'react';
import {View} from 'react-native';
import {TouchableWithoutFeedback, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Title from './Title';
const CustomChefNavigation = ({
  state,
  descriptors,
  navigation,
  PagesName = null,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#FF6921', '#FF9C39', '#FFD051']}
      style={{overflow: 'hidden', borderRadius: 20, marginTop: 15}}>
      <View
        style={{
          height: 85,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
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
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            height: 50,
                            width: Dimensions.get('window').width / 3 - 25,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15,
                          }}>
                          <Title
                            text={PagesName[0]}
                            titleStyle={{color: '#FF5F22', fontSize: 14}}
                          />
                        </View>
                      </View>
                    ) : (
                      <View
                        style={{
                          height: 50,
                          width: Dimensions.get('window').width / 3 - 25,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Title
                          text={PagesName[0]}
                          titleStyle={{color: 'white', fontSize: 14}}
                        />
                      </View>
                    )}
                  </View>
                )}

                {index === 1 && (
                  <View>
                    {isFocused ? (
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            height: 50,
                            width: Dimensions.get('window').width / 3 - 25,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15,
                          }}>
                          <Title
                            text={PagesName[1]}
                            titleStyle={{color: '#FF5F22', fontSize: 14}}
                          />
                        </View>
                      </View>
                    ) : (
                      <View
                        style={{
                          height: 50,
                          width: Dimensions.get('window').width / 3 - 25,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Title
                          text={PagesName[1]}
                          titleStyle={{color: 'white', fontSize: 14}}
                        />
                      </View>
                    )}
                  </View>
                )}

                {index === 2 && (
                  <View>
                    {isFocused ? (
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            height: 50,
                            width: Dimensions.get('window').width / 3 - 25,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15,
                          }}>
                          <Title
                            text={PagesName[2]}
                            titleStyle={{color: '#FF5F22', fontSize: 14}}
                          />
                        </View>
                      </View>
                    ) : (
                      <View
                        style={{
                          height: 50,
                          width: Dimensions.get('window').width / 3 - 25,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Title
                          text={PagesName[2]}
                          titleStyle={{color: 'white', fontSize: 14}}
                        />
                      </View>
                    )}
                  </View>
                )}
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </LinearGradient>
  );
};

export default CustomChefNavigation;
