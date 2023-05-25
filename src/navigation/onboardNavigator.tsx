import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login";
import SignupScreen from "../screens/signup";
import { LoggedInNavigator } from "./loggedInNavigator";


export type OnboardingStackParamList = {
  Login: undefined,
  SignUp: undefined,
  Main: undefined,
}

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login"  component={LoginScreen}/>
    <Stack.Screen name="SignUp" component={SignupScreen}/>
    <Stack.Screen name="Main" component={LoggedInNavigator} options={{headerShown: false}}/>
  </Stack.Navigator>
)