import { GraphPoint } from "react-native-graph"

export type FundPreviewData = {
  name: string,
  code: string,
  latestValue: number,
  graphPoints: Array<GraphPoint>,
  previewDataVariation: number,
}