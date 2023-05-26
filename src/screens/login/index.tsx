import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert, TextStyle, ViewStyle } from 'react-native';
import { LabelButton } from '../../components/LabelButton';
import { MyButton } from '../../components/MyButton';
import { MyPasswordInput } from '../../components/MyPasswordInput';
import { MyTextInput } from '../../components/MyTextInput';
import { ScreenView } from '../../components/ScreenView';
import { Spacer } from '../../components/Spacer';
import { TextHeader } from '../../components/TextHeader';
import { TextLabel } from '../../components/TextLabel';
import { OnboardingStackParamList } from '../../navigation/onboardNavigator';
import { mockUsers } from '../../mock/users';
import { useAppDispatch } from '../../redux/hooks';
import { setUser } from '../../redux/users.slice';

type NavigationProps = NativeStackScreenProps<OnboardingStackParamList, 'Login'>;

const LoginScreen: React.FC<NavigationProps> = ({
  navigation
}) => {
  const [email, setEmail] = useState('');
  const dispatch = useAppDispatch();

  const handleSignUp = () => navigation.push('SignUp');

  /**
   * Simulate login by simply searching for a email match on mocked users.
   * If a user is found update the redux state with the data.
   * @returns 
   */
  const handleLogin = () => {
    const userData = mockUsers.find(user => user.email === email);
    if (!userData)
      return Alert.alert("User not found");

    dispatch(setUser(userData));
    
    navigation.reset({
      index: 0,
      routes: [{name: 'Main'}],
    })
  }

  return (
    <ScreenView style={containerStyle}>
      <TextHeader style={centerText}>Login</TextHeader>

      <Spacer size={38}/>

      <MyTextInput
        label='E-mail'
        value={email}
        onChangeText={setEmail}
      />  

      <Spacer size={20}/>

      <MyPasswordInput
        label='Password'
        placeholder='Minimum 8 characters'
      />

      <Spacer size={38}/>

      <MyButton label='Login' onPress={handleLogin}/>

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