import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
import { LabelButton } from '../../components/LabelButton';
import { MyButton } from '../../components/MyButton';
import { MyPasswordInput } from '../../components/MyPasswordInput';
import { MyTextInput } from '../../components/MyTextInput';
import { Spacer } from '../../components/Spacer';
import { TextHeader } from '../../components/TextHeader';
import { TextLabel } from '../../components/TextLabel';
import { OnboardingStackParamList } from '../../navigation/onboardNavigator';
import { SafeAreaView } from '../../components/SafeAreaView';
import { ScreenView } from '../../components/ScreenView';

type NavigationProps = NativeStackScreenProps<OnboardingStackParamList, 'Login'>;

const LoginScreen: React.FC<NavigationProps> = ({
  navigation
}) => {
  const handleSignUp = () => navigation.push('SignUp');

  return (
    <ScreenView style={containerStyle}>
      <TextHeader style={centerText}>Login</TextHeader>

      <Spacer size={38}/>

      <MyTextInput
        label='E-mail'>  
      </MyTextInput>

      <Spacer size={20}/>

      <MyPasswordInput
        label='Password'
        placeholder='Minimum 8 characters'
        value='test'>
      </MyPasswordInput>

      <Spacer size={38}/>

      <MyButton label='Login'/>

      <Spacer size={12}/>

      <TextLabel style={centerText}>
        Don’t have an account?{' '}
        <LabelButton onPress={handleSignUp}>
          Sign up
        </LabelButton>
        {' '}here
      </TextLabel>
    </ScreenView>
  )
}

const containerStyle: ViewStyle = {
  padding: 20,
}

const centerText: TextStyle = {
  textAlign: 'center',
}

export default LoginScreen;