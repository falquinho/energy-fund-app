import React from 'react'
import { View } from 'react-native'
import { TextHeader } from '../../components/TextHeader'
import { Spacer } from '../../components/Spacer'


export const BreakdownSection: React.FC = () => {
  return (
    <View>
      <TextHeader>Fund Breakdown</TextHeader>
      <Spacer size={20}/>
    </View>
  )
}