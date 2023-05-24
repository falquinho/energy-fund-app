import React from 'react'
import { View } from 'react-native'


type SpacerProps = {
  size: number,
}

export const Spacer: React.FC<SpacerProps> = ({ size }) => {
  return (
    <View style={{ width: size, height: size }}></View>
  )
}