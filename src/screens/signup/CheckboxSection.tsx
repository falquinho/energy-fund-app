import React from 'react'
import { View } from 'react-native'
import { MyCheckbox } from '../../components/MyCheckbox'
import { TextLabel } from '../../components/TextLabel'
import { LabelButton } from '../../components/LabelButton'


export type CheckboxSectionProps = {
  onValueChange?: (value: boolean) => void,
  value?: boolean,
  disabled?: boolean,
  onPrivacyPress?: () => void, 
  onTermsPress?: () => void, 
}

export const CheckboxSection: React.FC<CheckboxSectionProps> = ({
  disabled,
  onPrivacyPress,
  onTermsPress,
  onValueChange,
  value,
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        <MyCheckbox {...{onValueChange, value, disabled}}/>
      </View>
      <View style={{flex: 1, marginLeft: 10}}>
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
      </View>
    </View>
  )
}