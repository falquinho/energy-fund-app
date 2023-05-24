import React from 'react'
import { Pressable, PressableProps, TextStyle, ViewStyle } from 'react-native'
import { ThemeColors, useMyTheme } from '../navigation/theme'
import { TextContrast } from './TextContrast'


type MyButtonProps = PressableProps & {
  label: string,
  outline?: boolean,
  secondary?: boolean,
}

export const MyButton: React.FC<MyButtonProps> = (props) => {
  const { colors } = useMyTheme();
  const {
    style,
    label,
    secondary = false,
    disabled = false,
  } = props;

  return (
    <Pressable
      {...props}
      style={[buildStyle(props, colors), style as ViewStyle]}
    >
      <TextContrast style={textStyle} secondary={secondary} disabled={disabled as boolean}>
        {label}
      </TextContrast>
    </Pressable>
  )
}

const buildStyle = (
  props: MyButtonProps,
  colors: ThemeColors,
): ViewStyle => { 
  let color = colors.primary;

  if( props.disabled )
    color = colors.disabled;
  else if( props.secondary )
    color = colors.secondary ;

  return ({
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: props.outline? undefined : color,
    borderColor: color,
    borderWidth: props.outline? 1 : undefined,
  })
}

const textStyle: TextStyle =  {
  fontSize: 16,
  fontWeight: '500',
  textAlign: 'center',
  lineHeight: 20,
}