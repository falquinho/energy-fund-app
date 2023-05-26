import React, { PropsWithChildren } from 'react'
import { useReduxSelector } from '../../redux/hooks'
import { selectCurrentFundInfo } from '../../redux/funds.slice'
import { View } from 'react-native';
import { TextHeader } from '../../components/TextHeader';
import { TextLabel } from '../../components/TextLabel';
import { IconButton } from '../../components/IconButton';
import { Text } from '../../components/Text';
import { Spacer } from '../../components/Spacer';


export const InfoSection: React.FC = () => {
  const info = useReduxSelector(selectCurrentFundInfo);

  if (!info)
    return null;

  return (
    <View>
      <TextHeader>Info & Stats</TextHeader>
      <Spacer size={20}/>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <InfoCell label='AUM' value={`$${info.aum}m`}/>
          <Spacer size={18}/>
          <InfoCell
            label='Vintage Range'
            value={`${info.vintage_start}-${info.vintage_end}`}
          />
          <Spacer size={18}/>
          <InfoCell label='Price at Close' value={`$${info.close_value}`}/>
        </View>

        <View style={{flex: 1}}>
          <InfoCell label='Issue Date' value={new Date(info.issued_at).toDateString()}/>
          <Spacer size={18}/>
          <InfoCell label='TER' value={`${info.ter}%`}/>
          <Spacer size={18}/>
          <InfoCell label='Price at Open' value={`$${info.open_value}`}/>
        </View>
      </View>
    </View>
  )
}



export const InfoCell: React.FC<{
  label: string,
  value: string,
  onPress?: () => void,
}> = ({
  label,
  value,
  onPress
}) => {
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <TextLabel>{label} </TextLabel>
        <IconButton iconName='information-circle-outline' onPress={onPress} iconStyle={{fontSize: 12}}/>
      </View>
      <Spacer size={10}/>
      <Text>{value}</Text>
    </View>
  )
}