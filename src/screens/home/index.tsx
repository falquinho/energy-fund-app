import React from 'react';
import { ScreenView } from '../../components/ScreenView';
import { LearnMoreCard } from './LearnMoreCard';


const HomeScreen: React.FC = () => {
  return (
    <ScreenView>
      <LearnMoreCard/>
    </ScreenView>
  )
}

export default HomeScreen;