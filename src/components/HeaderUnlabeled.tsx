import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { View, ViewStyle } from 'react-native'
import { BackButton } from './BackButton'
import { HeaderContainer } from './HeaderContainer'
import { Row } from './Row'


type HeaderUnlabelProps = {
  navigation: NavigationProp<any>,
}

export const HeaderUnlabel: React.FC<HeaderUnlabelProps> = ({
  navigation
}) => {
  return (
    <HeaderContainer>
      <Row>
        <Row style={flex}>
          <BackButton navigation={navigation}/>
        </Row>
        <Row style={[flex, centered]}>
          <View style={dash}></View>
          <View style={dash}></View>
          <View style={dash}></View>
        </Row>
        <Row style={flex}></Row>
      </Row>
    </HeaderContainer>
  )
}

const flex: ViewStyle = {
  flex: 1,
  alignItems: 'center',
}

const centered: ViewStyle = {
  justifyContent: 'center',
}

const dash: ViewStyle = {
  width: 50,
  height: 6,
  borderRadius: 3,
  backgroundColor: "#F4F4F4",
  margin: 2,
}