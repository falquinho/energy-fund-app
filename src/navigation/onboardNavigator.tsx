import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login";
import SignupScreen from "../screens/signup";

const Stack = createNativeStackNavigator();

export const OnboardingStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login"  component={LoginScreen}/>
    <Stack.Screen name="SignUp" component={SignupScreen}/>
  </Stack.Navigator>
)