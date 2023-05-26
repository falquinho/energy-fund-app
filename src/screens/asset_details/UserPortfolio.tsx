import React from 'react'
import { View } from 'react-native'
import { TextHeader } from '../../components/TextHeader'
import Icon from 'react-native-vector-icons/Ionicons'
import { useReduxSelector } from '../../redux/hooks'
import { selectCurrentFundUserPortfolio } from '../../redux/users.slice'
import { TextMuted } from '../../components/TextMuted'
import { GrowthTag } from '../../components/GrowthTag'
import { Spacer } from '../../components/Spacer'
import { Row } from '../../components/Row'
import { MyButton } from '../../components/MyButton'
import { UserFund } from '../../types/UserFund'
import { ViewStyle } from 'react-native'


export const UserPortfolio: React.FC = () => {
  const fundPortfolio = useReduxSelector(selectCurrentFundUserPortfolio);

  const elapsedDays = Math.trunc(
    (Date.now() - new Date(fundPortfolio?.updated_at || 0).getTime()) / 86400000
  );

  return (
    <View>
      <TextHeader>
        <Icon name="pie-chart-outline" style={{ fontSize: 20 }}/>
        {'  '}Your Portfolio
      </TextHeader>

      <Spacer size={20}/>

      {!fundPortfolio && (
        <TextMuted style={{ textAlign: 'center' }}>
          You don't currently own any Credits in this fund
        </TextMuted>
      )}

      {!!fundPortfolio && (
        <>
          <Row style={row}>
            <TextHeader>{fundPortfolio.credits} Credits</TextHeader>
            <TextHeader>${fundPortfolio.value}</TextHeader>
          </Row>
          <Spacer size={4}/>
          <Row style={row}>
            <GrowthTag growth={fundPortfolio.variation}/>
            <TextMuted>Last purchase {elapsedDays}d ago</TextMuted>
          </Row>
          <Spacer size={20}/>
          <Row>
            <MyButton label='Sell' outline style={{flex: 1}} onPress={() => {}}/>
            <Spacer size={10}/>
            <MyButton label='Retire Credits' secondary style={{flex: 1}} onPress={() => {}}/>
          </Row>
        </>
      )}
    </View>
  )
}

const row: ViewStyle = {
  justifyContent: 'space-between',
}