import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login";
import SignupScreen from "../screens/signup";


export type OnboardingStackParamList = {
  Login: undefined,
  SignUp: undefined,
}

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login"  component={LoginScreen}/>
    <Stack.Screen name="SignUp" component={SignupScreen}/>
  </Stack.Navigator>
)