import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, ViewStyle } from 'react-native'
import { BackButton } from './BackButton'
import { HeaderContainer } from './HeaderContainer'
import { TextHeader } from './TextHeader'
import { TextMuted } from './TextMuted'
import { useReduxSelector } from '../redux/hooks'
import { selectCurrentFundInfo } from '../redux/funds.slice'


export type FundHeaderProps = {
  navigation: BottomTabNavigationProp<any>,
}

export const FundHeader: React.FC<FundHeaderProps> = ({
  navigation,
}) => {
  const fundInfo = useReduxSelector(selectCurrentFundInfo);

  return (
    <HeaderContainer style={{flexDirection: 'row'}}>
      <View style={flex}>
        <BackButton navigation={navigation}/>
      </View>
      <View style={center}>
        <TextHeader>{fundInfo?.display_name || ''}</TextHeader>
        <TextMuted>{fundInfo?.code || ''}</TextMuted>
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