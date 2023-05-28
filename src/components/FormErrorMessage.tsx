import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { useMyTheme } from '../navigation/theme'
import { TextLabel } from './TextLabel'
import Icon from 'react-native-vector-icons/Ionicons'


export type FormErrorMessageProps = {
  error: string,
}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ error }) => {
  const { colors } = useMyTheme();

  if (!error)
    return null;

  return (
    <View style={containerStyle}>
      <View
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: colors.negative, opacity: 0.3 },
        ]}
      />
      <TextLabel style={{ color: colors.negative }}>
        <Icon name="warning-outline"/> {error}
      </TextLabel>
    </View>
  )
}

const containerStyle: ViewStyle = {
  padding: 10,
  borderRadius: 4,
  overflow: 'hidden',
  marginTop: 4,
}