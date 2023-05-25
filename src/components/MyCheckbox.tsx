import React from 'react'
import { useMyTheme } from '../navigation/theme'
import CheckBox, { CheckBoxProps } from '@react-native-community/checkbox';


export const MyCheckbox: React.FC<CheckBoxProps> = (props) => {
  const { colors } = useMyTheme();

  const tintColors = { true: colors.primary, false: colors.grayA0 };

  return (
    <CheckBox
      {...props}
      tintColors={tintColors}
      tintColor={colors.grayA0}
      onCheckColor={colors.primary}
      onTintColor={colors.primary}
      animationDuration={0.2}
    />
  )
}