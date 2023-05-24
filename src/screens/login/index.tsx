import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LabelButton } from '../../components/LabelButton';
import { MyButton } from '../../components/MyButton';
import { MyPasswordInput } from '../../components/MyPasswordInput';
import { MyTextInput } from '../../components/MyTextInput';
import { Spacer } from '../../components/Spacer';
import { TextHeader } from '../../components/TextHeader';
import { TextLabel } from '../../components/TextLabel';
import { OnboardingStackParamList } from '../../navigation/onboardNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type NavigationProps = NativeStackScreenProps<OnboardingStackParamList, 'Login'>;

const LoginScreen: React.FC<NavigationProps> = ({
  navigation
}) => {
  const handleSignUp = () => navigation.push('SignUp');

  return (
    <SafeAreaView style={containerStyle}>
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

      <View style={signupContainer}>
        <TextLabel>Don’t have an account? </TextLabel>
        <LabelButton onPress={handleSignUp} label='Sign up'/>
        <TextLabel> here</TextLabel>
      </View>
      
    </SafeAreaView>
  )
}

const containerStyle: ViewStyle = {
  padding: 20,
}

const centerText: TextStyle = {
  textAlign: 'center',
}

const signupContainer: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
}

export default LoginScreen;