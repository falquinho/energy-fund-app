import { DarkTheme, DefaultTheme, Theme, useTheme } from "@react-navigation/native";


export type ThemeColors = Theme['colors'] & {
  primaryContrast: string,
  secondary: string,
  secondaryContrast: string,
  disabled: string,
  disabledContrast: string,
}

export type MyTheme = Theme & {
  colors: ThemeColors,
}

const lightColors: ThemeColors = {
  ...DefaultTheme.colors,
  primary: '#770FDF',
  primaryContrast: '#FFFFFF',
  secondary: '#0FDF8F',
  secondaryContrast: '#FFFFFF',
  disabled: '#F4F4F4',
  disabledContrast: '#CFCFCF',
}

const darkColors: ThemeColors = {
  ...DarkTheme.colors,
  primary: '#770FDF',
  primaryContrast: '#FFFFFF',
  secondary: '#0FDF8F',
  secondaryContrast: '#FFFFFF',
  disabled: '#F4F4F4',
  disabledContrast: '#CFCFCF',
}

export const myTheme: Theme = {
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