import React, {useState} from 'react';
import {View, Text, FlatList, ScrollView, SafeAreaView} from 'react-native';
import Background from '../Components/Background';
import PreviousPageNavigation from '../Components/PreviousPageNavigation';
import Title from '../Components/Title';
import Card from '../Components/Card';
import ListingItemSeperator from '../Components/ListingItemSeperator';
import uuid from 'react-native-uuid';
import Header from '../Components/Header';

const FavouriteItemScreen = () => {
  const [mostRecent, setMostRecent] = useState(MostRecent);
  const setIsLiked = id => {
    setMostRecent(() =>
      mostRecent.map(el => {
        if (el.id === id) {
          return {...el, liked: !el.liked};
        }
        return el;
      }),
    );
  };
  const MostRecent = [
    {
      name: 'علي عبد الله',
      place: 'مكه المكرمة',
      location: 'منطقة باب المنارة',
      numberOfRequests: 15,
      tags: ['المفطح', 'الكبسة', 'المعصوب'],
      imageUrls: [
        require('../assets/images/image1.png'),
        require('../assets/images/image2.png'),
        require('../assets/images/image3.png'),
      ],
      rating: '4.4',
      liked: true,
    },
    {
      name: 'مروان أيّوب',
      place: 'تونس',
      location: 'المهدية',
      numberOfRequests: 7,
      tags: ['لازانيا', 'مقرونة', 'كسكسي', 'مقرونة'],
      imageUrls: [
        require('../assets/images/image1.png'),
        require('../assets/images/image2.png'),
        require('../assets/images/image3.png'),
      ],
      rating: '3.9',
      liked: true,
    },
    {
      name: 'مروان أيّوب',
      place: 'تونس',
      location: 'المهدية',
      numberOfRequests: 7,
      tags: ['لازانيا', 'مقرونة', 'كسكسي', 'مقرونة'],
      imageUrls: [
        require('../assets/images/image1.png'),
        require('../assets/images/image2.png'),
        require('../assets/images/image3.png'),
      ],
      rating: '3.9',
      liked: true,
    },
    {
      name: 'مروان أيّوب',
      place: 'تونس',
      location: 'المهدية',
      numberOfRequests: 7,
      tags: ['لازانيا', 'مقرونة', 'كسكسي', 'مقرونة'],
      imageUrls: [
        require('../assets/images/image1.png'),
        require('../assets/images/image2.png'),
        require('../assets/images/image3.png'),
      ],
      rating: '3.9',
      liked: true,
    },
  ];
  return (
    <Background>
      <Header title="قائمة المفضلة" />
      <SafeAreaView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={MostRecent}
          keyExtractor={item => uuid.v4()}
          renderItem={({item}) => (
            <React.Fragment>
              <Card
                data={item}
                isRecent
                isLiked={item.liked}
                setLiked={setIsLiked}
              />
              <ListingItemSeperator vertical={false} />
            </React.Fragment>
          )}
        />
      </SafeAreaView>
    </Background>
  );
};

export default FavouriteItemScreen;
