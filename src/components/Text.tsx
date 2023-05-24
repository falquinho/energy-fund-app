import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TextProps, Text as ReatcText } from 'react-native';


/**
 * Text component with some customization:
 * - color from react-navigation theme
 * - custom font (TODO)
 * otherwise same as React Native's Text.
 */
export const Text: React.FC<TextProps> = (props) => {
  const { colors } = useTheme();
  return (
    <ReatcText {...props} style={[{color: colors.text}, props.style]}/>
  );
}