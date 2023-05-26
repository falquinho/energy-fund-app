import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Text } from '../../components/Text';
import { useMyTheme } from '../../navigation/theme';
import { ThemeColors } from '../../navigation/theme.types';
import { useAppDispatch, useReduxSelector } from '../../redux/hooks';
import { AssetScreenReduxState, selectGraphInterval, setGraphInterval } from './redux';
import { Row } from '../../components/Row';


export const IntervalSelect: React.FC = () => {
  const { colors } = useMyTheme();
  const dispatch = useAppDispatch();
  const selectedInterval = useReduxSelector(selectGraphInterval);

  const dispatchSetInterval = (key: AssetScreenReduxState['graphInterval']) => {
    dispatch(setGraphInterval(key));
  }

  return (
    <Row style={mainStyle}>
      {intervals.map(item => {
        const selected = selectedInterval === item.key;

        return (
          <TouchableOpacity 
            style={touchableStyle}
            onPress={() => dispatchSetInterval(item.key)}
            key={item.key}
          >
            <View style={[backStyle(selected, colors), StyleSheet.absoluteFill]}/>
            <Text style={{color: selected? colors.primary : colors.grayA0}}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </Row>
  )
}

const intervals: Array<{key: AssetScreenReduxState['graphInterval'], label: string}> = [
  { key: 'h', label: '1h' },
  { key: 'd', label: '1d' },
  { key: 'w', label: '1w' },
  { key: 'm', label: '1m' },
  { key: 'y', label: '1y' },
  { key: 'all', label: 'All' },
]

const mainStyle: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'space-between',
}

const touchableStyle: ViewStyle = {
  width: 36,
  height: 36,
  borderRadius: 4,
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
}

const backStyle = (selected: boolean, colors: ThemeColors): ViewStyle => ({
  backgroundColor: selected? colors.primary : undefined,
  opacity: selected? 0.1 : 1,
})