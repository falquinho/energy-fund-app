import React from 'react'
import { View, ViewProps, ViewStyle } from 'react-native'
import { useMyTheme } from '../navigation/theme'
import { ThemeColors } from '../navigation/theme.types'


export type FlatCardProps = ViewProps & {
  primary?: boolean,
  outline?: boolean,
}

export const FlatCard: React.FC<FlatCardProps> = (props) => {
  const { colors } = useMyTheme();

  return (
    <View {...props} style={[style(props, colors), props.style]}/>
  )
}

const style = (props: FlatCardProps, colors: ThemeColors): ViewStyle => ({
  padding: 12,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: props.primary? colors.primary : colors.grayF4,
  backgroundColor: props.outline
    ? undefined 
    : props.primary
      ? colors.primary 
      : colors.grayF4,
})