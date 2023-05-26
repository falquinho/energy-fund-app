import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ScreenView } from '../../components/ScreenView';
import { Spacer } from '../../components/Spacer';
import { LoggedInTabParamList } from '../../navigation/loggedInNavigator';
import { FundsSection } from './FundsSection';
import { LearnMoreCard } from './LearnMoreCard';


export type HomeScreenProps = BottomTabScreenProps<LoggedInTabParamList, 'Home'>

const HomeScreen: React.FC<HomeScreenProps> = ({
  navigation,
}) => {
  return (
    <ScreenView>
      <FundsSection navigation={navigation}/>
      <Spacer size={20}/>
      <LearnMoreCard/>
    </ScreenView>
  )
}

export default HomeScreen;