import React from 'react'
import { View, ViewProps, ViewStyle } from 'react-native'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';


/**
 * View that avoids screen insets. Already padded.
 * Intended to be used on screens headers.
 * @returns 
 */
export const HeaderContainer: React.FC<ViewProps> = (props) => {
  const insets = useSafeAreaInsets();

  return (
    <View {...props} style={[paddings(insets), props.style]} />
  )
}

const paddings = (insets: EdgeInsets): ViewStyle => ({
  paddingLeft: 20 + insets.left,
  paddingRight: 20 + insets.right,
  paddingTop: 20 + insets.top,
  paddingBottom: 20,
})