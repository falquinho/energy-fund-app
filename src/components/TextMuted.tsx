import React from 'react'
import { useMyTheme } from '../navigation/theme'
import { TextProps } from 'react-native';
import { Text } from './Text';

/**
 * Text component with a low contrast color.
 */
export const TextMuted: React.FC<TextProps> = (props) => {
  const { colors } = useMyTheme();

  return (
    <Text {...props} style={[{ color: colors.grayA0 }, props.style]}/>
  )
}