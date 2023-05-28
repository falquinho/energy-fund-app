import React, { useCallback, useState } from 'react'
import { MyTextInput, MyTextInputProps } from './MyTextInput'
import { View, ViewStyle } from 'react-native';
import { IconButton } from './IconButton';


export type MyPasswordInputProps = MyTextInputProps;

export const MyPasswordInput: React.FC<MyPasswordInputProps> = (props) => {
  const [hide, setHide] = useState(true);

  return (
    <View>
      <MyTextInput
        {...props}
        style={inputStyle}
        secureTextEntry={hide}
      />
      <IconButton
        iconName={hide? 'eye-outline' : 'eye-off-outline'}
        onPress={() => setHide(!hide)}
        style={btnStyle(!!props.label)}
      />
    </View>
  )
}

const inputStyle: ViewStyle = {
  paddingRight: 40,
}

const btnStyle = (hasLabel: boolean) : ViewStyle => ({
  position: 'absolute',
  right: 12,
  top: hasLabel? 32 : 14,
})