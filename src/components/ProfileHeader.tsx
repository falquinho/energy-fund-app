import React from 'react';
import { StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMyTheme } from '../navigation/theme';
import { ThemeColors } from '../navigation/theme.types';
import { GrowthTag } from './GrowthTag';
import { HeaderContainer } from './HeaderContainer';
import { IconButton } from './IconButton';
import { Row } from './Row';
import { Spacer } from './Spacer';
import { Text } from './Text';
import { TextContrast } from './TextContrast';
import { TextHeader } from './TextHeader';
import { useReduxSelector } from '../redux/hooks';
import { selectUserData } from '../redux/users.slice';


export const ProfileHeader: React.FC = () => {
  const userData = useReduxSelector(selectUserData);
  const { colors } = useMyTheme();
  const iconStyle = buildIconStyle(colors);

  if (!userData)
    return <HeaderContainer/>;

  return (
    <HeaderContainer>
      <Row style={row}>
        <IconButton iconName='person-circle-outline' iconStyle={iconStyle}/>
        <Row style={row}>
          <TextHeader>Account: ${userData.total_balance}</TextHeader>
          <Icon name='chevron-down'/>
        </Row>
        <IconButton iconName='notifications-outline' iconStyle={iconStyle}/>
      </Row>
      
      <Spacer size={20}/>

      <Text style={{ fontSize: 12, marginBottom: 6 }}>Portfolio</Text>
      <Row style={row}>
        <Row style={{ alignItems: 'flex-end' }}>
          <TextHeader style={valueText}>
            ${userData.total_balance}
          </TextHeader>
          <GrowthTag growth={userData.variation}/>
        </Row>

        <TouchableOpacity style={touchable} onPress={() => {}}>
          <View style={[backdrop(colors)]}></View>
          <TextContrast outline>
            <Icon name='trophy-outline'/> Earn Rewards
          </TextContrast>
        </TouchableOpacity>
      </Row>
    </HeaderContainer>
  )
}

const row: ViewStyle = {
  justifyContent: 'space-between',
  alignItems: 'center',
}

const valueText: TextStyle = {
  fontSize: 24,
  lineHeight: undefined,
  marginRight: 4,
}

const touchable: ViewStyle = {
  borderRadius: 4,
  overflow: 'hidden',
  padding: 8,
}

const backdrop = (colors: ThemeColors): ViewStyle => ({
  ...StyleSheet.absoluteFillObject,
  opacity: 0.1,
  backgroundColor: colors.primary,
})

const buildIconStyle = (colors: ThemeColors): TextStyle => ({
  fontSize: 24,
  color: colors.text,
})