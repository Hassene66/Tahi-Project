import React, {useRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ImageInput from './ImageInput';
import uuid from 'react-native-uuid';

const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage}) => {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <ImageInput
            style={styles.addImage}
            onChangeImage={uri => onAddImage(uri)}
          />
          {imageUris.map(uri => (
            <View key={uuid.v4()} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={uri => onRemoveImage(uri)}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginHorizontal: 5,
  },
  addImage: {
    marginHorizontal: 5,
  },
});

export default ImageInputList;
