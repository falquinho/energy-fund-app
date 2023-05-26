/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  useColorScheme
} from 'react-native';
import RootNavigator from './src/navigation';
import { myTheme, myThemeDark } from './src/navigation/theme';
import { Provider as ReduxProvider } from 'react-redux';
import reduxStore from './src/redux';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode? myThemeDark : myTheme;

  return (
    <ReduxProvider store={reduxStore}>
      <NavigationContainer theme={theme}>
        <RootNavigator/>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
