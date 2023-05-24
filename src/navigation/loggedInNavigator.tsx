import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import AssetDetailsScreen from "../screens/asset_details";
import PortfolioScreen from "../screens/portfolio";

const Tab = createBottomTabNavigator();

export const LoggedInNavigator: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name="Asset" component={AssetDetailsScreen}/>
    <Tab.Screen name="Portfolio" component={PortfolioScreen}/>
  </Tab.Navigator>
)