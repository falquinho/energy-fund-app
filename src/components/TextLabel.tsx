import React from 'react'
import { TextProps, TextStyle } from 'react-native'
import { TextMuted } from './TextMuted'


/**
 * A Muted Text with a small size.
 * @param props 
 * @returns 
 */
export const TextLabel: React.FC<TextProps> = (props) => {
  return (
    <TextMuted {...props} style={[style, props.style]}/>
  )
}

const style: TextStyle = ({
  fontSize: 12,
  lineHeight: 14,
})