import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import RoundIcon from './RoundIcon';
import Title from './Title';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import Collapsible from 'react-native-collapsible';
import uuid from 'react-native-uuid';
const WaitingCard = ({data}) => {
  const [Data, setData] = useState(data);
  const toggleMoreDetails = id => {
    setData(() =>
      Data.map(item => {
        if (item.id === id) return {...item, moreDetails: !item.moreDetails};
        return item;
      }),
    );
  };
  return (
    <>
      <View style={{margin: 8, right: 4}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          keyExtractor={() => uuid.v4()}
          renderItem={({
            item: {
              id,
              userName,
              date,
              deliveryAdress,
              details,
              country,
              region,
              blueTags,
              pinkTags,
              moreDetails,
            },
          }) => (
            <View style={styles.container}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.firstRow}>
                  <View style={styles.iconContainer}>
                    <RoundIcon
                      title="user"
                      solid
                      color="#FABD30"
                      bgColor="#FFF8E7"
                      size={27}
                      withShadow={false}
                      style={styles.icon}
                    />
                  </View>

                  <View style={{flexDirection: 'column'}}>
                    <Title text={userName} titleStyle={styles.name} />
                    <View style={{flexDirection: 'row'}}>
                      <Title text="التاريخ" titleStyle={styles.dateLabel} />
                      <Title text={date} titleStyle={styles.date} />
                    </View>
                  </View>

                  <View style={styles.leftGrid}>
                    <Text style={styles.rating}>3.2</Text>
                    <FontAwesome5 name="star" color="#FF6B21" size={22} solid />
                    <LinearGradient
                      colors={['#EB0E0E', '#FF8181']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      style={styles.btnContainer}>
                      <Text style={styles.btn}>إلغاء</Text>
                    </LinearGradient>
                  </View>
                </View>

                <Text style={styles.title}>عنوان الطلب</Text>
                <Text style={styles.subTitle}>{deliveryAdress}</Text>
                <Collapsible collapsed={moreDetails}>
                  <Text style={styles.title}>تفاصيل</Text>
                  <Text style={styles.subTitle}>{details}</Text>
                  <Text style={styles.title}>المدينة</Text>
                  <Text style={styles.subTitle}>{country}</Text>
                  <Text style={styles.title}>المنطقة</Text>
                  <Text style={styles.subTitle}>{region}</Text>

                  <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {blueTags.map((tag, idx) => (
                      <View
                        key={idx}
                        style={{
                          backgroundColor: '#EFFCFF',
                          borderRadius: 10,
                          alignItems: 'center',
                          alignSelf: 'flex-start',
                          paddingHorizontal: 10,
                          marginHorizontal: 4,
                          paddingVertical: 5,
                          marginVertical: 5,
                        }}>
                        <Title
                          text={tag}
                          titleStyle={{
                            marginTop: 0,
                            color: '#30D2FA',
                            fontSize: 13,
                          }}
                        />
                      </View>
                    ))}
                  </View>
                  <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {pinkTags.map((tag, idx) => (
                      <View
                        key={idx}
                        style={{
                          backgroundColor: 'rgba(250, 46, 107, 0.1)',
                          borderRadius: 10,
                          alignItems: 'center',
                          alignSelf: 'flex-start',
                          paddingHorizontal: 10,
                          marginHorizontal: 4,
                          paddingVertical: 5,
                          marginVertical: 5,
                        }}>
                        <Title
                          text={tag}
                          titleStyle={{
                            marginTop: 0,
                            color: '#FA306D',
                            fontSize: 13,
                          }}
                        />
                      </View>
                    ))}
                  </View>
                </Collapsible>
                <TouchableWithoutFeedback onPress={() => toggleMoreDetails(id)}>
                  <View style={styles.ToggleBtnContainer}>
                    <Text style={styles.ToggleBtn}>
                      {moreDetails ? 'أكثر تفاصيل' : 'أقل تفاصيل'}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </ScrollView>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default WaitingCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    elevation: 5,
    shadowColor: 'rgba(255,78,54,18)',
    marginVertical: 10,
  },
  firstRow: {flexDirection: 'row'},
  secondRow: {marginHorizontal: 20},
  btnContainer: {
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  btn: {
    fontFamily: 'Cairo-Bold',
    color: 'white',
    fontSize: 15,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  rating: {color: '#FF6B21', paddingLeft: 6},
  leftGrid: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontFamily: 'Cairo-SemiBold',
    fontSize: 13,
    marginTop: 0,
    paddingRight: 9,
    color: 'black',
  },
  name: {
    fontSize: 16,
    marginTop: 0,
    paddingRight: 9,
    color: 'black',
  },
  dateLabel: {
    fontSize: 12,
    marginTop: 0,
    paddingRight: 9,
    color: 'black',
  },
  icon: {
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  iconContainer: {
    width: '17%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Cairo-Bold',
    fontSize: 15,
  },
  subTitle: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
  },
  ToggleBtnContainer: {
    borderColor: '#707070',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 8,
  },
  ToggleBtn: {
    fontFamily: 'Cairo-Bold',
    color: '#707070',
    fontSize: 17,
    padding: 12,
  },
});
