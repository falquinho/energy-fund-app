import React from 'react';
import { ScreenView } from '../../components/ScreenView';
import { LearnMoreCard } from './LearnMoreCard';
import { FundsSection } from './FundsSection';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { LoggedInTabParamList } from '../../navigation/loggedInNavigator';
import { Spacer } from '../../components/Spacer';


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