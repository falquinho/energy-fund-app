import React from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderContainer } from './HeaderContainer';
import { IconButton } from './IconButton';
import { TextHeader } from './TextHeader';
import { ThemeColors } from '../navigation/theme.types';
import { useMyTheme } from '../navigation/theme';
import { Row } from './Row';


export const ProfileHeader: React.FC = () => {
  const { colors } = useMyTheme();
  const iconStyle = buildIconStyle(colors);
  return (
    <HeaderContainer style={row}>
      <IconButton iconName='person-circle-outline' iconStyle={iconStyle}/>
      <Row style={row}>
        <TextHeader>Account: $1,457.23</TextHeader>
        <Icon name='chevron-down'/>
      </Row>
      <IconButton iconName='notifications-outline' iconStyle={iconStyle}/>
    </HeaderContainer>
  )
}

const row: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'space-between',
}

const buildIconStyle = (colors: ThemeColors): TextStyle => ({
  fontSize: 24,
  color: colors.text,
})