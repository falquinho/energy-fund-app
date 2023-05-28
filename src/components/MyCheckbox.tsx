import CheckBox, { CheckBoxProps } from '@react-native-community/checkbox';
import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { useMyTheme } from '../navigation/theme';
import { FormErrorMessage } from './FormErrorMessage';
import { Row } from './Row';
import { Text } from './Text';


export type MyCheckboxProps = CheckBoxProps & {
  label?: string | ReactNode,
  error?: string,
}

export const MyCheckbox: React.FC<MyCheckboxProps> = (props) => {
  const { label, error } = props;
  const { colors } = useMyTheme();

  const tintColors = { true: colors.primary, false: colors.grayA0 };

  return (
    <View>
      <Row>
        <CheckBox
          {...props}
          tintColors={tintColors}
          tintColor={colors.grayA0}
          onCheckColor={colors.primary}
          onTintColor={colors.primary}
          animationDuration={0.2}
        />
        {!!label && (
          <View style={colStyle}>
            {typeof label === 'string' && (
              <Text>{label}</Text>
            )}
            {typeof label !== 'string' && (
              label
            )}
          </View>
        )}
      </Row>
      <FormErrorMessage error={error || ''}/>
    </View>
  )
}

const colStyle: ViewStyle = {
  flex: 1,
  marginLeft: 10,
}