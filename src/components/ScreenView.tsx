import React from 'react'
import { KeyboardAvoidingView, ScrollView, ScrollViewProps, View, ViewProps, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


export type ScreenViewProps = ScrollViewProps & {
  noPadding?: boolean,
}

export const ScreenView: React.FC<ScreenViewProps> = (props) => {
  const { bottom } = useSafeAreaInsets();

  const style: ViewStyle = {
    padding: props.noPadding? 0 : 20,
  };

  return (
    <KeyboardAvoidingView style={{ paddingBottom: bottom }} behavior='position'>
      <ScrollView {...props} style={[style, props.style]} contentInset={{bottom}}/>
    </KeyboardAvoidingView>
  )
}