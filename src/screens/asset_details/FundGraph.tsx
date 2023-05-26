import React from 'react'
import { GraphPoint, LineGraph } from 'react-native-graph'
import { useMyTheme } from '../../navigation/theme'
import { graphDataIntervalVariation } from '../../utils/graphUtils'


export type FundGraphProps = {
  graphPoints: Array<GraphPoint>,
}

export const FundGraph: React.FC<FundGraphProps> = ({
  graphPoints,
}) => {
  const { colors } = useMyTheme();

  const variation = graphDataIntervalVariation(graphPoints)

  return (
    <LineGraph
      points={graphPoints}
      animated={true}
      color="#4484B2"
      style={{ height: 300 }}
    />
  )
}