import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Alert, TextStyle } from 'react-native';
import { LabelButton } from '../../components/LabelButton';
import { MyButton } from '../../components/MyButton';
import { MyPasswordInput } from '../../components/MyPasswordInput';
import { MyTextInput } from '../../components/MyTextInput';
import { ScreenView } from '../../components/ScreenView';
import { Spacer } from '../../components/Spacer';
import { TextHeader } from '../../components/TextHeader';
import { TextLabel } from '../../components/TextLabel';
import { OnboardingStackParamList } from '../../navigation/onboardNavigator';
import { CheckboxSection } from './CheckboxSection';
import { Formik } from 'formik';
import * as Yup from 'yup';


type SignupScreenProps = NativeStackScreenProps<OnboardingStackParamList, 'SignUp'>;

const SignupScreen: React.FC<SignupScreenProps> = ({
  navigation,
}) => {
  const initialFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeCheckbox: false,
  }

  const formSchema = Yup.object().shape({
    firstName: Yup.string().min(2, "Too short.").required("First Name is required."),
    lastName: Yup.string().min(2, "Too short.").required("Last Name is required."),
    email: Yup.string().email("E-mail is not valid.").required("E-mail is required."),
    password: Yup.string().min(6, "Minumum of 6 characters.").required("Password is required."),
    agreeCheckbox: Yup.boolean().isTrue("You must agree to the terms."),
  });

  const handleLoginHere = () => {
    navigation.navigate('Login')
  }

  const onFormSubmit = (values: typeof initialFormValues) => {
    Alert.alert(JSON.stringify(values, null, 2))
  } 

  return (
    <ScreenView>
      <TextHeader style={headerStyle}>
        Create your account
      </TextHeader>
      <Spacer size={34}/>

      <Formik
        initialValues={initialFormValues}
        onSubmit={onFormSubmit}
        validationSchema={formSchema}
      >
        {({
          handleSubmit,
          handleBlur,
          handleChange,
          values,
          errors,
          isValid,
          isSubmitting,
          isValidating,
          setFieldValue,
        }) => (<>
          {isValidating && <TextHeader>It's Validating!</TextHeader>}
          <MyTextInput
            label='First Name'
            onBlur={handleBlur('firstName')}
            onChangeText={handleChange('firstName')}
            value={values.firstName}
            error={errors.firstName}
          />
          <Spacer size={20}/>

          <MyTextInput
            label='Last Name'
            onBlur={handleBlur('lastName')}
            onChangeText={handleChange('lastName')}
            value={values.lastName}
            error={errors.lastName}
          />
          <Spacer size={20}/>

          <MyTextInput
            label='E-mail'
            onBlur={handleBlur('email')}
            onChangeText={handleChange('email')}
            value={values.email}
            error={errors.email}
          />
          <Spacer size={20}/>

          <MyPasswordInput
            label='Password'
            onBlur={handleBlur('password')}
            onChangeText={handleChange('password')}
            value={values.password}
            error={errors.password}
          />
          <Spacer size={20}/>

          <CheckboxSection
            value={values.agreeCheckbox}
            onValueChange={val => setFieldValue('agreeCheckbox', val, true)}
            error={errors.agreeCheckbox}
          />
          <Spacer size={32}/>

          <MyButton
            label='Create account'
            onPress={handleSubmit}
            disabled={!isValid || isSubmitting}
          />
        </>)}
      </Formik>

      <Spacer size={20}/>
      <TextLabel style={{textAlign: 'center'}}>
        Already have an account?{''}
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