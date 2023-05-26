import React from 'react';
import { LineGraph } from 'react-native-graph';
import { ScreenView } from '../../components/ScreenView';
import { useMyTheme } from '../../navigation/theme';
import { selectFundGraphData } from '../../redux/funds.slice';
import { useReduxSelector } from '../../redux/hooks';
import { IntervalSelect } from './IntervalSelect';


const AssetDetailsScreen: React.FC = () => {
  const { colors } = useMyTheme();
  const graphData = useReduxSelector(selectFundGraphData);

  return (
    <ScreenView>
      <IntervalSelect/>
    </ScreenView>
  )
}

export default AssetDetailsScreen;