import { InterfaceThemeColors } from '@Shared/styles/themes/InterfaceTheme'
import React from 'react'
import { Text, TextStyle, StyleProp } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components/native'

interface TypographyProps {
  variant: 'heading' | 'subheading' | 'body1' | 'body2'
  color?: keyof InterfaceThemeColors
  style?: StyleProp<TextStyle>
  text: string
}

export function Typography({
  variant,
  color,
  style,
  text
}: TypographyProps): React.JSX.Element {
  const theme = useTheme()

  let textStyle: StyleProp<TextStyle> = {}

  switch (variant) {
    case 'heading':
      textStyle = {
        fontSize: RFValue(24),
        fontWeight: 'bold'
      }
      break
    case 'subheading':
      textStyle = {
        fontSize: RFValue(18),
        fontWeight: 'normal'
      }
      break
    case 'body1':
      textStyle = {
        fontSize: RFValue(20),
        fontWeight: 'normal'
      }
      break
    case 'body2':
      textStyle = {
        fontSize: RFValue(16),
        fontWeight: 'normal'
      }
      break
    default:
      break
  }

  if (color) {
    textStyle.color = theme.colors[color]
  } else {
    textStyle.color = theme.colors.gray600
  }

  return <Text style={[textStyle, style]}>{text}</Text>
}
