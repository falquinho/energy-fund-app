import React from 'react'
import { GrowthTag } from '../../components/GrowthTag'
import { FlatCard } from '../../components/FlatCard'
import { Image, ImageStyle, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Text } from '../../components/Text'
import { FundPreviewData } from '../../types/FundPreviewData'
import Images from '../../images'
import { LineGraph } from 'react-native-graph'
import { useMyTheme } from '../../navigation/theme'
import { Spacer } from '../../components/Spacer'



export type FundPreviewCardProps = FundPreviewData & {
  onPress: () => void,
  margin?: boolean,
}

export const FundPreviewCard: React.FC<FundPreviewCardProps> = ({
  name,
  code,
  graphPoints,
  latestValue,
  previewDataVariation,
  onPress,
  margin,
}) => {
  const { colors } = useMyTheme();

  return (
    <TouchableOpacity onPress={onPress} style={{marginRight: margin? 14 : 0}}>
      <FlatCard outline style={container}>
        <Image style={icon} source={mapCodeImgSrc[code]}/>
        
        <Spacer size={8}/>
        <Text style={nameText}>{name}</Text>

        <Spacer size={14}/>
        <LineGraph
          points={graphPoints}
          animated={false}
          color={previewDataVariation >= 0? colors.positive : colors.negative}
          style={graphStyle}
        />
        <Spacer size={14}/>

        <View style={row}>
          <Text >$ {latestValue}</Text>
          <GrowthTag growth={previewDataVariation}/>
        </View>
      </FlatCard>
    </TouchableOpacity>
  )
}

const container: ViewStyle = {
  width: 160,
  height: 160,
}

const row: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
}

const nameText: TextStyle = {
  fontSize: 12,
  fontWeight:  '600',
}

const icon: ImageStyle = {
  width: 16,
  height: 16,
  resizeMode: 'contain',
}

const graphStyle: ViewStyle = {
  width: 80,
  height: 40,
}

const mapCodeImgSrc: Record<string, any> = {
  WFND: Images.windIcon,
  SFND: Images.sunIcon,
  NFND: Images.leafIcon,
}