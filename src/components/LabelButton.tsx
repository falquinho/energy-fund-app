import React from 'react'
import { TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { TextLabel } from './TextLabel'
import { useMyTheme } from '../navigation/theme'
import { ThemeColors } from '../navigation/theme.types'


export type LabelButtonProps = TouchableOpacityProps & {
  label: string,
}

export const LabelButton: React.FC<LabelButtonProps> = (props) => {
  const { colors } = useMyTheme();
  
  return (
    <TouchableOpacity {...props}>
      <TextLabel style={textStyle(colors)}>
        {props.label}
      </TextLabel>
    </TouchableOpacity>
  )
}

const textStyle = (colors: ThemeColors): TextStyle => ({
  color: colors.text,
  textDecorationLine: 'underline',
})