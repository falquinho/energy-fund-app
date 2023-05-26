import React from 'react';
import { MyButton } from '../../components/MyButton';
import { ScreenView } from '../../components/ScreenView';
import { Spacer } from '../../components/Spacer';
import { selectFundGraphData } from '../../redux/funds.slice';
import { useReduxSelector } from '../../redux/hooks';
import { BreakdownSection } from './BreakdownSection';
import { FundGraph } from './FundGraph';
import { InfoSection } from './InfoSection';
import { IntervalSelect } from './IntervalSelect';
import { LegalNote } from './LegalNote';
import { UserPortfolio } from './UserPortfolio';


const AssetDetailsScreen: React.FC = () => {
  const graphData = useReduxSelector(selectFundGraphData);

  return (
    <ScreenView>
      <FundGraph graphPoints={graphData}/>
      <Spacer size={20}/>
      <IntervalSelect/>
      <Spacer size={40}/>
      <InfoSection/>
      <Spacer size={40}/>
      <BreakdownSection/>
      <Spacer size={40}/>
      <UserPortfolio/>
      <Spacer size={40}/>
      <LegalNote/>
      <Spacer size={30}/>
      <MyButton label='Buy'/>
    </ScreenView>
  )
}

export default AssetDetailsScreen;