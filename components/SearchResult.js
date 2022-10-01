import React, {useState} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import uuid from 'react-native-uuid';
import ListingItemSeperator from '../Components/ListingItemSeperator';
import Card from './Card';
import {filter} from 'smart-array-filter/src';
import {useFormikContext} from 'formik';

const SearchResult = ({data = []}) => {
  const {values, isSubmitting} = useFormikContext();
  const [results, setResults] = useState(data);
  const setIsLiked = id => {
    setResults(() =>
      results.map(el => {
        if (el.id === id) {
          return {...el, liked: !el.liked};
        }
        return el;
      }),
    );
  };
  let filteredData = filter(results, {
    keywords: [`name:${values.searchForChef}`, `place:${values.region}`],
    caseSensitive: false,
  });
  return (
    <View>
      {isSubmitting ? (
        filteredData.length === 0 ? (
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Cairo-SemiBold',
            }}>
            لم يتم العثور على نتائج تطابق بحثك
          </Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filteredData}
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
        )
      ) : (
        <Text
          style={{
            alignSelf: 'center',
            fontFamily: 'Cairo-SemiBold',
          }}>
          الرجاء ادخال البيانات في أعلى الشاشة
        </Text>
      )}
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({});
