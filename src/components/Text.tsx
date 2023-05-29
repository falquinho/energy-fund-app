import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TextProps, Text as ReactText, TextStyle, StyleSheet } from 'react-native';


/**
 * Text component with some customization:
 * - color from react-navigation theme
 * - custom font (TODO)
 * otherwise same as React Native's Text.
 */
export const Text: React.FC<TextProps> = (props) => {
  const { colors } = useTheme();

  const flattenedStyle: TextStyle = StyleSheet.flatten(props.style);

  const familyStyle: TextStyle = { 
    fontFamily: weigthToFamilyMap[''+ flattenedStyle.fontWeight],
  }

  return (
    <ReactText
      {...props}
      style={[
        { color: colors.text },
        props.style,
        familyStyle,
      ]}
    />
  );
}

const weigthToFamilyMap: Record<string, string> = {
  '100': 'Sora-Thin',
  '200': 'Sora-ExtraLight',
  '300': 'Sora-Light',
  '400': 'Sora-Regular',
  '500': 'Sora-Medium',
  '600': 'Sora-SemiBold',
  '700': 'Sora-Bold',
  '800': 'Sora-ExtraBold',
  '900': 'Sora-ExtraBold',
  'normal': 'Sora-Regular',
  'bold': 'Sora-Bold',
}