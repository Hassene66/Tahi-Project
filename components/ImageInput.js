import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import RoundIcon from './RoundIcon';
import {launchImageLibrary} from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';

const ImageInput = ({imageUri, onChangeImage}) => {
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('حذف', 'هل أنت متأكد أنك تريد حذف هذه الصورة ؟', [
        {text: 'لا'},
        {text: 'نعم', onPress: () => onChangeImage(imageUri)},
      ]);
  };

  const selectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      ({didCancel, assets}) => {
        if (!didCancel) onChangeImage(assets[0].uri);
      },
    );
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <Feather name="plus-circle" size={35} color="#FF5F22" />}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF4EF',
    borderRadius: 17,
    height: 140,
    width: 140,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ImageInput;
