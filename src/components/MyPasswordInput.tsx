import React, { useState } from 'react'
import { MyTextInput, MyTextInputProps } from './MyTextInput'
import { View, ViewStyle } from 'react-native';
import { IconButton } from './IconButton';


export type MyPasswordInputProps = MyTextInputProps;

export const MyPasswordInput: React.FC<MyPasswordInputProps> = (props) => {
  const [show, setShow] = useState(false);
  const length = (props.value || '').length;
  return (
    <View>
      <MyTextInput
        {...props}
        value={show? props.value : '*'.repeat(length)}
        style={inputStyle}
      />
      <IconButton
        iconName={show? 'eye-off-outline' : 'eye-outline'}
        onPress={() => setShow(!show)}
        style={btnStyle}
      />
    </View>
  )
}

const inputStyle: ViewStyle = {
  paddingRight: 40,
}

const btnStyle: ViewStyle = {
  position: 'absolute',
  right: 12,
  bottom: 14,
}