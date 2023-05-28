import React from 'react';
import { TextProps } from 'react-native';
import { useMyTheme } from '../navigation/theme';
import { Text } from './Text';


type TextContrastProps = TextProps & {
  secondary?: boolean,
  disabled?: boolean,
  outline?: boolean,
}

/**
 * Custom Text component intended to be used layered on top
 * of a "primary" background color View. Otherwise same as
 * React Native's Text.
 */
export const TextContrast: React.FC<TextContrastProps> = (props) => {
  const { colors } = useMyTheme();

  let color = colors.primaryContrast;
   
  if (props.disabled)
    color = colors.disabledContrast;
  else if (props.secondary)
    color = props.outline? colors.secondary : colors.secondaryContrast;
  else
    color = props.outline? colors.primary : colors.primaryContrast;

  return (
    <Text {...props} style={[{color}, props.style]}/>
  );
}