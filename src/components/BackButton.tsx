import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import { TextStyle } from 'react-native';
import { useMyTheme } from '../navigation/theme';
import { ThemeColors } from '../navigation/theme.types';
import { IconButton } from './IconButton';


export type BackButtonProps = {
  navigation: BottomTabNavigationProp<any> | NativeStackNavigationProp<any>,
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