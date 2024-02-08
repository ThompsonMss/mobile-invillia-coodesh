import { ColorSchemeName } from 'react-native'
import { lightTheme } from './lightTheme'

export function getTheme(typeOfTheme: ColorSchemeName) {
  switch (typeOfTheme) {
    case 'light':
      return lightTheme
    default:
      return lightTheme
  }
}
