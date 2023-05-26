import React from 'react';
import { ScreenView } from '../../components/ScreenView';
import { selectFundGraphData } from '../../redux/funds.slice';
import { useReduxSelector } from '../../redux/hooks';
import { FundGraph } from './FundGraph';
import { InfoSection } from './InfoSection';
import { IntervalSelect } from './IntervalSelect';
import { Spacer } from '../../components/Spacer';


const AssetDetailsScreen: React.FC = () => {
  const graphData = useReduxSelector(selectFundGraphData);

  return (
    <ScreenView>
      <FundGraph graphPoints={graphData}/>
      <Spacer size={20}/>
      <IntervalSelect/>
      <Spacer size={40}/>
      <InfoSection/>
    </ScreenView>
  )
}

export default AssetDetailsScreen;