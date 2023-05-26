import React from 'react'
import { View, ViewProps, ViewStyle } from 'react-native'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMyTheme } from '../navigation/theme';
import { ThemeColors } from '../navigation/theme.types';


/**
 * View that avoids screen insets. Already padded.
 * Intended to be used on screens headers.
 * @returns 
 */
export const HeaderContainer: React.FC<ViewProps> = (props) => {
  const { colors } = useMyTheme();
  const insets = useSafeAreaInsets();

  return (
    <View {...props} style={[baseStyle(colors, insets), props.style]} />
  )
}


const baseStyle = (colors: ThemeColors, insets: EdgeInsets): ViewStyle => ({
  paddingLeft: 20 + insets.left,
  paddingRight: 20 + insets.right,
  paddingTop: 20 + insets.top,
  paddingBottom: 20,
  borderBottomWidth: 1,
  borderBottomColor: colors.grayF4
})