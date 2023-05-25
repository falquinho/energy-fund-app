import React from 'react';
import { TextStyle } from 'react-native';
import { LabelButton } from '../../components/LabelButton';
import { MyButton } from '../../components/MyButton';
import { MyPasswordInput } from '../../components/MyPasswordInput';
import { MyTextInput } from '../../components/MyTextInput';
import { SafeAreaView } from '../../components/SafeAreaView';
import { Spacer } from '../../components/Spacer';
import { TextHeader } from '../../components/TextHeader';
import { TextLabel } from '../../components/TextLabel';
import { CheckboxSection } from './CheckboxSection';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/onboardNavigator';
import { ScreenView } from '../../components/ScreenView';


type SignupScreenProps = NativeStackScreenProps<OnboardingStackParamList, 'SignUp'>;

const SignupScreen: React.FC<SignupScreenProps> = ({
  navigation,
}) => {
  const handleLoginHere = () => {
    navigation.navigate('Login')
  }

  return (
    <ScreenView>
      <TextHeader style={headerStyle}>
        Create your account
      </TextHeader>
      <Spacer size={34}/>
      <MyTextInput label='First Name'/>
      <Spacer size={20}/>
      <MyTextInput label='Last Name'/>
      <Spacer size={20}/>
      <MyTextInput label='E-mail'/>
      <Spacer size={20}/>
      <MyPasswordInput label='Password'/>
      <Spacer size={20}/>
      <CheckboxSection/>
      <Spacer size={32}/>
      <MyButton
        label='Create account'
      />
      <Spacer size={20}/>
      <TextLabel style={{textAlign: 'center'}}>
        {'Already have an account? '}
        <LabelButton onPress={handleLoginHere}>
          Log in Here
        </LabelButton>
      </TextLabel>
    </ScreenView>
  )
}

const headerStyle: TextStyle = {
  textAlign: 'center',
}

export default SignupScreen;