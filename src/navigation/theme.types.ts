import { Theme } from "@react-navigation/native";


export type ThemeColors = Theme['colors'] & {
  primaryContrast: string,
  secondary: string,
  secondaryContrast: string,
  disabled: string,
  disabledContrast: string,
  positive: string,
  negative: string,
  grayF4: '#F4F4F4',
  grayCF: '#CFCFCF',
  grayA0: '#A0A0A0',
}

export type MyTheme = Theme & {
  colors: ThemeColors,
}