import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import Background from '../Components/Background';
import Card from '../Components/Card';
import LogoV2 from '../Components/LogoV2';
import Title from '../Components/Title';
import ListingItemSeperator from '../Components/ListingItemSeperator';
import uuid from 'react-native-uuid';
const HomePage = () => {
  const MostPopular = [
    {
      id: 1,
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
      liked: false,
    },
    {
      id: 2,
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

  const MostRecent = [
    {
      id: 1,
      name: 'علي عبد الله',
      place: 'مكه المكرمة',
      location: 'منطقة باب المنارة',
      numberOfRequests: 15,
      tags: ['المفطح', 'الكبسة', 'المعصوب'],
      imageUrls: [
        require('../assets/images/image1.png'),
        require('../assets/images/image2.png'),
        require('../assets/images/image3.png'),
        require('../assets/images/image2.png'),
      ],
      rating: '4.4',
      liked: false,
    },
    {
      id: 2,
      name: 'حسّان أيّوب',
      place: 'تونس',
      location: 'المهدية',
      numberOfRequests: 7,
      tags: ['لازانيا', 'مقرونة', 'كسكسي', 'مقرونة'],
      imageUrls: [
        require('../assets/images/image1.png'),
        require('../assets/images/image2.png'),
        require('../assets/images/image3.png'),
        require('../assets/images/image2.png'),
      ],
      rating: '3.9',
      liked: true,
    },
  ];
  const [mostPopular, setMostPopular] = useState(MostPopular);
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
  const setIsLikedMostPopular = id => {
    setMostPopular(() =>
      mostPopular.map(el => {
        if (el.id === id) {
          return {...el, liked: !el.liked};
        }
        return el;
      }),
    );
  };
  return (
    <Background isInverted>
      <LogoV2 />
      <Title text="الرئيسية" />
      <ScrollView>
        <Title
          text="الأكثر شعبية"
          titleStyle={{
            fontSize: 17,
            color: 'black',
            marginVertical: 10,
            marginTop: 20,
          }}
        />
        <View>
          <ScrollView horizontal>
            {mostPopular.map(item => (
              <React.Fragment key={uuid.v4()}>
                <Card
                  data={item}
                  isRecent={false}
                  isLiked={item.liked}
                  setLiked={setIsLikedMostPopular}
                  withBorder
                />
                <ListingItemSeperator vertical />
              </React.Fragment>
            ))}
          </ScrollView>
        </View>
        <Title
          text="أضيف مؤخرا "
          titleStyle={{
            fontSize: 17,
            color: 'black',
            marginVertical: 10,
            marginTop: 20,
          }}
        />
        <ScrollView>
          <View>
            {mostRecent.map(item => (
              <React.Fragment key={uuid.v4()}>
                <Card
                  data={item}
                  isRecent
                  isLiked={item.liked}
                  setLiked={setIsLiked}
                  withBorder={false}
                />
                <ListingItemSeperator vertical={false} />
              </React.Fragment>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </Background>
  );
};

export default HomePage;
