import React from 'react'
import { TextInput, TextInputProps, TextStyle, ViewStyle } from 'react-native'
import { useMyTheme } from '../navigation/theme'
import { ThemeColors } from '../navigation/theme.types';
import { TextLabel } from './TextLabel';



export type MyTextInputProps = TextInputProps & {
  label?: string,
}

export const MyTextInput: React.FC<MyTextInputProps> = (props) => {
  const { colors } = useMyTheme();
  const { label } = props;

  return (
    <>
      {!!label && (
        <TextLabel style={labelStyle}>
          {label}
        </TextLabel>
      )}
      <TextInput
        {...props}
        style={[inputStyle(colors), props.style]}
        placeholderTextColor={colors.grayCF}
      />
    </>
  )
}

const inputStyle = (colors: ThemeColors): ViewStyle => ({
  borderRadius: 4,
  backgroundColor: colors.grayF4,
  paddingVertical: 15,
  paddingHorizontal: 10,
})

const labelStyle: TextStyle = {
  fontWeight: '500',
  marginBottom: 5,
}