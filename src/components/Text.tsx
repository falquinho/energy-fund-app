import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TextProps, Text as ReactText } from 'react-native';


/**
 * Text component with some customization:
 * - color from react-navigation theme
 * - custom font (TODO)
 * otherwise same as React Native's Text.
 */
export const Text: React.FC<TextProps> = (props) => {
  const { colors } = useTheme();
  return (
    <ReactText
      {...props}
      style={[
        { color: colors.text },
        { fontFamily: 'Sora' },
        props.style
      ]}
    />
  );
}