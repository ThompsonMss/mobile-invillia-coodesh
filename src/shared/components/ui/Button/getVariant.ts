import { DefaultTheme } from 'styled-components/native/dist/types'
import { VariantButton } from '.'
import { InterfaceThemeColors } from '@Shared/styles/themes/InterfaceTheme'

interface InterfaceGetVariant {
  backgroundColor: string
  borderColor: string
  loadColor: string
  textColor: keyof InterfaceThemeColors
}

export function getVariant(typeVariant: VariantButton, theme: DefaultTheme): InterfaceGetVariant {
  if (typeVariant === 'primary') {
    return {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
      loadColor: theme.colors.gray100,
      textColor: 'gray100'
    }
  }

  if (typeVariant === 'outline') {
    return {
      backgroundColor: 'transparent',
      borderColor: theme.colors.primary,
      loadColor: theme.colors.primary,
      textColor: 'primary'
    }
  }

  if (typeVariant === 'inverse') {
    return {
      backgroundColor: theme.colors.inverse,
      borderColor: theme.colors.inverse,
      loadColor: theme.colors.gray700,
      textColor: 'gray700'
    }
  }

  // Default
  return {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    loadColor: theme.colors.gray100,
    textColor: 'gray100'
  }
}
