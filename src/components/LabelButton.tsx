import React from 'react'
import { TextProps, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'
import { TextLabel } from './TextLabel'
import { useMyTheme } from '../navigation/theme'
import { ThemeColors } from '../navigation/theme.types'



export const LabelButton: React.FC<TextProps> = (props) => {
  const { colors } = useMyTheme();
  
  return (
    <TextLabel {...props} style={[textStyle(colors), props.style]}/>
  )
}

const textStyle = (colors: ThemeColors): TextStyle => ({
  color: colors.text,
  textDecorationLine: 'underline',
})