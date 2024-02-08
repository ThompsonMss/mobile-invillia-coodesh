export interface InterfaceThemeColors {
  primary: string
  background: string

  gray100: string
  gray200: string
  gray300: string
  gray400: string
  gray500: string
  gray600: string
  gray700: string
}

export interface InterfaceTheme {
  colors: InterfaceThemeColors
  metrics: {
    borderRadius1: number
    borderRadius2: number
    borderRadius3: number
    spacing1: number
    spacing2: number
    spacing3: number
    spacing4: number
    spacing5: number
  }
}
