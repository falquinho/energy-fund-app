import React from 'react'
import { TextProps, TextStyle } from 'react-native'
import { Text } from './Text'
import { ThemeColors } from '../navigation/theme.types'
import { useMyTheme } from '../navigation/theme'


export const TextHeader: React.FC<TextProps> = (props) => {
  const { colors } = useMyTheme();

  return (
    <Text {...props} style={[style(colors), props.style]}/>
  )
}

const style = (colors: ThemeColors): TextStyle => ({
  color: colors.text,
  fontSize: 18,
  lineHeight: 22,
  fontWeight: '600',
})