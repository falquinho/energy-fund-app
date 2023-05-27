import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login";
import SignupScreen from "../screens/signup";
import { LoggedInNavigator } from "./loggedInNavigator";
import { HeaderContainer } from "../components/HeaderContainer";
import { HeaderUnlabel } from "../components/HeaderUnlabeled";


export type OnboardingStackParamList = {
  Login: undefined,
  SignUp: undefined,
  Main: undefined,
}

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ header: () => <HeaderContainer/>}}
    />
    <Stack.Screen
      name="SignUp"
      component={SignupScreen}
      options={{
        header: ({ navigation }) => <HeaderUnlabel navigation={navigation}/>
      }}
    />
    <Stack.Screen
      name="Main"
      component={LoggedInNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)