import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import AssetDetailsScreen from "../screens/asset_details";
import PortfolioScreen from "../screens/portfolio";
import Icon from "react-native-vector-icons/Ionicons";
import { useMyTheme } from "./theme";
import { ProfileHeader } from "../components/ProfileHeader";
import { FundHeader } from "../components/FundHeader";


export type LoggedInTabParamList = {
  Home: undefined,
  Trade: undefined,
  Portfolio: undefined,
}

const Tab = createBottomTabNavigator<LoggedInTabParamList>();

export const LoggedInNavigator: React.FC = () => {
  const { colors } = useMyTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: colors.text,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="home" color={color} size={size}/>
          ),
          header: (props) => <ProfileHeader/>
        }}
      />
      <Tab.Screen
        name="Trade"
        component={AssetDetailsScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="swap-horizontal" color={color} size={size}/>
          ),
          header: ({navigation}) => (
            <FundHeader navigation={navigation }/>
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="pie-chart-outline" color={color} size={size}/>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}