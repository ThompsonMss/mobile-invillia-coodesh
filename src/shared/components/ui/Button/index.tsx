import { TouchableOpacityProps } from 'react-native'
import { Typography } from '../Typograph'
import * as LocalStyles from './styles'
import { useTheme } from 'styled-components/native'
import { getVariant } from './getVariant'

export type VariantButton = 'primary' | 'inverse'

interface InterfaceButton extends TouchableOpacityProps {
  text: string
  loading?: boolean
  variant: VariantButton
}

export function Button({ text, loading, variant, ...rest }: InterfaceButton) {
  const theme = useTheme()
  const propsVariant = getVariant(variant, theme)

  return (
    <LocalStyles.Container
      backgroundColor={propsVariant.backgroundColor}
      borderColor={propsVariant.borderColor}
      {...rest}
      disabled={loading}
    >
      {loading ? (
        <LocalStyles.Load color={propsVariant.loadColor} />
      ) : (
        <Typography text={text} variant="body2" color={propsVariant.textColor} />
      )}
    </LocalStyles.Container>
  )
}
