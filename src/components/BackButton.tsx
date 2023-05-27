import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { TextStyle } from 'react-native';
import { useMyTheme } from '../navigation/theme';
import { ThemeColors } from '../navigation/theme.types';
import { IconButton } from './IconButton';


export type BackButtonProps = {
  navigation: NavigationProp<any>,
}

/**
 * A special case IconButton, used to go back in navigation history.
 * @returns 
 */
export const BackButton: React.FC<BackButtonProps> = ({
  navigation
}) => {
  const handleBack = () => navigation.goBack();

  const { colors } = useMyTheme();

  return (
    <IconButton iconName='arrow-back' onPress={handleBack} iconStyle={style(colors)}/>
  )
}

const style = (colors: ThemeColors): TextStyle => ({
  fontSize: 24,
  color: colors.text,
})