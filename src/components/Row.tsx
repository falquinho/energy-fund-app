import React from 'react'
import { View, ViewProps } from 'react-native'


export const Row: React.FC<ViewProps> = (props) => {
  return (
    <View {...props} style={[{flexDirection: 'row'}, props.style]}/>
  )
}