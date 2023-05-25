import React from 'react'
import { TextContrast } from '../../components/TextContrast'
import { FlatCard } from '../../components/FlatCard'
import { Image, ImageStyle, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Spacer } from '../../components/Spacer'
import Images from '../../images'


type LearnMoreCardProps = {

}

export const LearnMoreCard: React.FC<LearnMoreCardProps> = ({

}) => {
  return (
    <TouchableOpacity>
      <FlatCard primary style={{flexDirection: 'row'}}>
        <View style={leftCol}>
          <TextContrast style={strongText}>
            Learn more about carbon credits
          </TextContrast>
          <Spacer size={10}/>
          <TextContrast>
            Check out our top tips!
          </TextContrast>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Image source={Images.businessStatistics} style={imageStyle}/>
        </View>
      </FlatCard>
    </TouchableOpacity>
  )
}



const leftCol: ViewStyle = {
  flex: 1,
  padding: 8,
  marginRight: 40,
}

const strongText: TextStyle = {
  fontSize: 16,
  fontWeight: '600',
}

const imageStyle: ImageStyle = {
  width: 94,
  height: 86,
  resizeMode: 'contain',
}