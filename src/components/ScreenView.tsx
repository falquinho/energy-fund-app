import React from 'react'
import { KeyboardAvoidingView, ScrollView, ScrollViewProps, View, ViewProps, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


export type ScreenViewProps = ScrollViewProps & {
  noPadding?: boolean,
  avoidBottom?: boolean,
}

export const ScreenView: React.FC<ScreenViewProps> = (props) => {
  const { bottom } = useSafeAreaInsets();
  const { noPadding, avoidBottom } = props;

  const style: ViewStyle = {
    padding: noPadding? 0 : 20,
    height: '100%'
  };

  return (
    <KeyboardAvoidingView
      style={{ height: "100%", paddingBottom: avoidBottom? bottom : 0 }}
      behavior='height'
    >
      <ScrollView {...props} style={[style, props.style]} contentInset={{bottom}}/>
    </KeyboardAvoidingView>
  )
}