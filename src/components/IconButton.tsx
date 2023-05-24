import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'
import { IconProps } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMyTheme } from '../navigation/theme';


export type IconButtonProps = {
  onPress: TouchableOpacityProps['onPress'],
  iconName: IconProps['name'],
  style?: ViewStyle, 
  iconStyle?: IconProps['style'],
}

/**
 * Simple Icon button.
 * @param props.iconName name from the "Ionicons" icon set.
 * @returns 
 */
export const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  iconName,
  iconStyle,
  style,
}) => {
  const { colors } = useMyTheme();

  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Icon name={iconName} size={20} style={iconStyle} color={colors.grayA0}/>
    </TouchableOpacity>
  )
}