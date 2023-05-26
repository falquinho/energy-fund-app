import React from 'react'
import { GraphPoint, LineGraph } from 'react-native-graph'
import { useMyTheme } from '../../navigation/theme'
import { graphDataIntervalVariation } from '../../utils/graphUtils'
import { TextStyle, View, ViewStyle } from 'react-native'
import { TextHeader } from '../../components/TextHeader'
import { GrowthTag } from '../../components/GrowthTag'
import { limitDecimals } from '../../utils/mathUtils'
import { Row } from '../../components/Row'


export type FundGraphProps = {
  graphPoints: Array<GraphPoint>,
}

export const FundGraph: React.FC<FundGraphProps> = ({
  graphPoints,
}) => {
  const { colors } = useMyTheme();
  const variation = graphDataIntervalVariation(graphPoints)


  return (
    <View>
      <Row style={row}>
        <View>
          <TextHeader style={textStyle}>
            {`$${limitDecimals(graphPoints[graphPoints.length - 1].value)}`}
          </TextHeader>
          <GrowthTag growth={variation}/>
        </View>

        <TextHeader style={textStyle}>
          {new Date().getFullYear()}
        </TextHeader>
      </Row>
      <LineGraph
        points={graphPoints}
        animated={false}
        color={variation >= 0? colors.positive : colors.negative}
        style={{ height: 300 }}
      />
    </View>
  )
}

const row: ViewStyle = {
  justifyContent: 'space-between',
  marginBottom: 20,
}

const textStyle: TextStyle = {
  fontSize: 24,
  lineHeight: 30,
}