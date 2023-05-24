import React from 'react';
import { MyTextInput } from '../../components/MyTextInput';
import { TextHeader } from '../../components/TextHeader';
import { MyButton } from '../../components/MyButton';
import { TextLabel } from '../../components/TextLabel';
import { Spacer } from '../../components/Spacer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextStyle, View, ViewStyle } from 'react-native';
import { MyPasswordInput } from '../../components/MyPasswordInput';
import { LabelButton } from '../../components/LabelButton';


const LoginScreen: React.FC = () => {
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
        <LabelButton onPress={() => {}} label='Sign up here'/>
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