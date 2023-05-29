import React from 'react'
import { View } from 'react-native'
import { MyCheckbox, MyCheckboxProps } from '../../components/MyCheckbox'
import { TextLabel } from '../../components/TextLabel'
import { LabelButton } from '../../components/LabelButton'
import { Row } from '../../components/Row'


export type CheckboxSectionProps = MyCheckboxProps & {
  onPrivacyPress?: () => void, 
  onTermsPress?: () => void, 
}

export const CheckboxSection: React.FC<CheckboxSectionProps> = (props) => {
  const {
    onPrivacyPress,
    onTermsPress,
  } = props;

  return (
    <MyCheckbox
      {...props}
      label={(
        <TextLabel>
          {"I am over 18 years of age and I have read and agree to the "}
          <LabelButton onPress={onTermsPress}>
            Terms of Service
          </LabelButton>
          {" and "}
          <LabelButton onPress={onPrivacyPress}>
            Privacy policy
          </LabelButton>
        </TextLabel>
      )}
    />
  )
}