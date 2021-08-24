import React from 'react';
import {View, Text, Image, ImageBackground, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Title from './Title';
import Review from 'react-native-customer-review-bars';
import uuid from 'react-native-uuid';

const OverallRating = ({
  Rating: {overallRating, totalRatingNumber, ratings},
}) => {
  return (
    <View style={{flexDirection: 'row', margin: 15}}>
      <View
        style={{
          width: '30%',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <LinearGradient
          style={{
            height: 120,
            width: 120,
            borderRadius: 20,
            margin: 5,
            marginBottom: 2,
            justifyContent: 'center',
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[
            '#ffdfd1',
            '#ffdfd1',
            '#faded2',
            '#ffdfd1',
            '#ffdfd1',
            '#ffe6db',
            '#ffe6db',
          ]}>
          <View style={{alignItems: 'center'}}>
            <ImageBackground
              source={require('../assets/images/OverallRatingStar.png')}
              style={{
                width: 80,
                height: 80,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Title
                text={overallRating}
                titleStyle={{marginTop: 0, color: 'white'}}
              />
            </ImageBackground>
          </View>
        </LinearGradient>
        <Title
          text="4,5 من 5"
          titleStyle={{
            marginTop: 0,
            color: 'black',
            fontSize: 13,
            fontFamily: 'Cairo-Bold',
          }}
        />
        <Title
          text={`(${totalRatingNumber} إجمالي)`}
          titleStyle={{
            marginTop: 0,
            color: '#666666',
            fontSize: 12,
            fontFamily: 'Cairo-SemiBold',
          }}
        />
      </View>
      <View style={{width: '70%'}}>
        <Review
          reviews={ratings}
          barStyle={{
            backgroundColor: '#E6E6E6',
            borderRadius: 5,
            height: 10,
          }}
          barFillStyle={{height: 10, borderRadius: 5}}
          colors={['orange', 'orange', 'orange', 'orange', 'orange']}
        />
      </View>
    </View>
  );
};

export default OverallRating;

// <View style={{flexDirection: 'row'}}>
//   <View
//     style={{
//       width: '35%',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: 200,
//       backgroundColor: 'pink',
//     }}>
//     <LinearGradient
//       style={{
//         height: 120,
//         width: 120,
//         borderRadius: 20,
//         margin: 5,
//         marginBottom: 2,
//         justifyContent: 'center',
//       }}
//       start={{x: 0, y: 0}}
//       end={{x: 1, y: 0}}
//       colors={[
//         '#ffdfd1',
//         '#ffdfd1',
//         '#faded2',
//         '#ffdfd1',
//         '#ffdfd1',
//         '#ffe6db',
//         '#ffe6db',
//       ]}>
//       <View style={{alignItems: 'center'}}>
//         <ImageBackground
//           source={require('../assets/images/OverallRatingStar.png')}
//           style={{
//             width: 80,
//             height: 80,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Title text="4,5" titleStyle={{marginTop: 0, color: 'white'}} />
//         </ImageBackground>
//       </View>
//     </LinearGradient>
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: 'dodgerblue',
//       }}>
//       <Title
//         text="4,5 من 5"
//         titleStyle={{
//           marginTop: 0,
//           color: 'black',
//           fontSize: 13,
//           fontFamily: 'Cairo-Bold',
//         }}
//       />
//       <Title
//         text="(252 إجمالي)"
//         titleStyle={{
//           marginTop: 0,
//           color: '#666666',
//           fontSize: 11,
//           fontFamily: 'Cairo-SemiBold',
//         }}
//       />
//     </View>
//   </View>
//   <View style={{flex: 1, backgroundColor: 'purple'}}>
//     <Review
//       reviews={reviews}
//       reviewTypeStyle={{fontSize: 15}}
//       barStyle={{
//         backgroundColor: '#E6E6E6',
//         borderRadius: 5,
//         height: 10,
//       }}
//       barFillStyle={{height: 10, borderRadius: 5}}
//       colors={['orange', 'orange', 'orange', 'orange', 'orange']}
//     />
//   </View>
// </View>
