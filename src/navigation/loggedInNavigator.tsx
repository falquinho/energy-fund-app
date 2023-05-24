import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import AssetDetailsScreen from "../screens/asset_details";
import PortfolioScreen from "../screens/portfolio";


export type LoggedInTabParamList = {
  Home: undefined,
  Asset: undefined,
  Portfolio: undefined,
}

const Tab = createBottomTabNavigator<LoggedInTabParamList>();

export const LoggedInNavigator: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name="Asset" component={AssetDetailsScreen}/>
    <Tab.Screen name="Portfolio" component={PortfolioScreen}/>
  </Tab.Navigator>
)