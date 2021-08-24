import React from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import RoundIcon from './RoundIcon';
import {launchImageLibrary} from 'react-native-image-picker';

const ImageInput = ({imageUri, onChangeImage}) => {
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you  sure you wanna delete this image ?', [
        {text: 'Yes', onPress: () => onChangeImage(null)},
        {text: 'No'},
      ]);
  };

  const selectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
        maxHeight: 120,
        maxWidth: 120,
      },
      ({didCancel, assets}) => {
        if (!didCancel) onChangeImage(assets[assets.length - 1].uri);
      },
    );
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <RoundIcon
            isFontAwesome={false}
            title="plus-circle"
            size={35}
            withShadow={false}
            color="#FF5F22"
            bgColor="transparent"
          />
        )}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF4EF',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 120,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ImageInput;
