import { createStackNavigator } from "@react-navigation/stack"
import { OnboardingStack } from "./onboardNavigator";
import { LoggedInNavigator } from "./loggedInNavigator";

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Onboarding" component={OnboardingStack}/>
    <Stack.Screen name="LoggedIn" component={LoggedInNavigator}/>
  </Stack.Navigator>
);

export default RootNavigator;