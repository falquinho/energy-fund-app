import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { Spacer } from '../../components/Spacer'
import { TextHeader } from '../../components/TextHeader'
import { LoggedInTabParamList } from '../../navigation/loggedInNavigator'
import { selectAvailableFundsPreview } from '../../redux/funds.slice'
import { useAppDispatch, useReduxSelector } from '../../redux/hooks'
import { setSelectedFund } from '../asset_details/redux'
import { FundPreviewCard } from './FundPreviewCard'


export type FundsSectionProps = {
  navigation: BottomTabNavigationProp<LoggedInTabParamList, 'Home'>,
}

export const FundsSection: React.FC<FundsSectionProps> = ({
  navigation,
}) => {
  const fundsPreviews = useReduxSelector(selectAvailableFundsPreview);
  const dispatch = useAppDispatch();

  const handlePress = (fundCode: string) => {
    dispatch(setSelectedFund(fundCode));
    navigation.jumpTo('Trade');
  }

  return (
    <View>
      <TextHeader>Funds</TextHeader>
      <Spacer size={20}/>
      <ScrollView horizontal>
        {fundsPreviews.map((preview, index, arr) => (
          <FundPreviewCard
            {...preview}
            onPress={() => handlePress(preview.code)}
            margin={index < arr.length - 1}
            key={preview.code}
          />
        ))}
      </ScrollView>
    </View>
  )
}