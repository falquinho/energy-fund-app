import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, ViewStyle } from 'react-native'
import { BackButton } from './BackButton'
import { HeaderContainer } from './HeaderContainer'
import { TextHeader } from './TextHeader'
import { TextMuted } from './TextMuted'


export type FundHeaderProps = {
  name: string,
  code: string,
  navigation: BottomTabNavigationProp<any>,
}

export const FundHeader: React.FC<FundHeaderProps> = ({
  name,
  code,
  navigation,
}) => {
  return (
    <HeaderContainer style={{flexDirection: 'row'}}>
      <View style={flex}>
        <BackButton navigation={navigation}/>
      </View>
      <View style={center}>
        <TextHeader>{name}</TextHeader>
        <TextMuted>{code}</TextMuted>
      </View>
      <View style={flex}>
      </View>
    </HeaderContainer>
  )
}

const flex: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
}

const center: ViewStyle = {
  alignItems: 'center',
}