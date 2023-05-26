import { DarkTheme, DefaultTheme, Theme, useTheme } from "@react-navigation/native";
import { MyTheme, ThemeColors } from "./theme.types";


const lightColors: ThemeColors = {
  ...DefaultTheme.colors,
  background: '#FFFFFF',
  primary: '#770FDF',
  primaryContrast: '#FFFFFF',
  secondary: '#0FDF8F',
  secondaryContrast: '#FFFFFF',
  disabled: '#F4F4F4',
  disabledContrast: '#CFCFCF',
  card: '#F4F4F4',
  grayF4: '#F4F4F4',
  grayCF: '#CFCFCF',
  grayA0: '#A0A0A0',
  positive: '#0FDF8F',
  negative: '#EE8688',
}

const darkColors: ThemeColors = {
  ...DarkTheme.colors,
  primary: '#770FDF',
  primaryContrast: '#FFFFFF',
  secondary: '#0FDF8F',
  secondaryContrast: '#FFFFFF',
  disabled: '#F4F4F4',
  disabledContrast: '#CFCFCF',
  card: '#F4F4F4',
  grayF4: '#F4F4F4',
  grayCF: '#CFCFCF',
  grayA0: '#A0A0A0',
  positive: '#0FDF8F',
  negative: '#EE8688',
}

export const myTheme: MyTheme = {
  ...DefaultTheme,
  colors: lightColors,
}

export const myThemeDark: Theme = {
  ...DarkTheme,
  colors: darkColors,
}

export function useMyTheme(): MyTheme {
  const theme = useTheme();
  return theme as MyTheme;
}