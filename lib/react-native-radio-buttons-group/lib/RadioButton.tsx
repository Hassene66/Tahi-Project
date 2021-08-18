import React from 'react';
import { PixelRatio, Pressable, StyleSheet, Text, View } from 'react-native';

import { RadioButtonProps } from './types';

export default function RadioButton({
  borderColor="#CCCCCC",
  color = '#FF5F22',
  containerStyle={flex:1},
  disabled = false,
  id,
  label,
  labelStyle,
  layout = 'row',
  onPress,
  selected = false,
  size = 24 }: RadioButtonProps) {

  const borderWidth = PixelRatio.roundToNearestPixel(size * 0.1);
  const sizeHalf = PixelRatio.roundToNearestPixel(size * 0.6);
  const sizeFull = PixelRatio.roundToNearestPixel(size);

  let orientation: any = { flexDirection: 'row' }
  let margin: any = { marginLeft: 10 };

  if (layout === 'column') {
    orientation = { alignItems: 'center' };
    margin = { marginTop: 10 };
  }

  function handlePress() {
    if (disabled) {
      return null;
    }
    if (onPress) {
      onPress(id);
    }
  }

  return (
    <Pressable
      onPress={handlePress}
      style={[styles.container, orientation, { opacity: disabled ? 0.2 : 1 }, containerStyle]}
    >
      <View
        style={[
          styles.border,
          {
            borderColor: borderColor ,
            borderWidth,
            width: sizeFull,
            height: sizeFull,
            borderRadius: sizeHalf
          },selected && { borderColor: color }
        ]}>
        {selected && (
          <View
            style={{
              backgroundColor: color,
              width: sizeHalf,
              height: sizeHalf,
              borderRadius: sizeHalf
            }}
          />
        )}
      </View>
      {
        Boolean(label) && <Text style={[margin, labelStyle,{fontFamily:"Cairo-SemiBold"}]}>{label}</Text>
      }
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginRight: 15,
  },
  border: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
