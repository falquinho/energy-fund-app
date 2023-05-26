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


export const UserPortfolio: React.FC = () => {
  const fundPortfolio = useReduxSelector(selectCurrentFundUserPortfolio);

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
          <Row>
            <View>
              <TextHeader>{fundPortfolio.credits} Credits</TextHeader>
              <GrowthTag growth={fundPortfolio.variation}/>
            </View>
            <TextHeader>
              ${fundPortfolio.value}
            </TextHeader>
          </Row>
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