import React from 'react'
import { TextStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useMyTheme } from '../navigation/theme'
import { Text } from './Text'



export type GrowthTagProps = {
  growth: number,
}

export const GrowthTag: React.FC<GrowthTagProps> = ({
  growth,
}) => {
  const { colors } = useMyTheme();
  const isPositive = growth >= 0;

  const style: TextStyle = {
    color: isPositive? colors.positive : colors.negative,
  };

  return (
    <Text style={style}>
      <Icon name={isPositive? 'trending-up' : 'trending-down'}/>
      {' '}{Math.abs(growth)}%
    </Text>
  )
}