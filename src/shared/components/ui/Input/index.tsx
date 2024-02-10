import React from 'react'

import { TextInputProps } from 'react-native'
import * as LocalStyles from './styles'
import { Typography } from '../Typograph'

import Entypo from 'react-native-vector-icons/Entypo'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components/native'

interface InterfaceInput extends TextInputProps {
  label: string

  isPassword?: boolean
  error?: boolean
}

export function Input({ label, isPassword, error, ...rest }: InterfaceInput) {
  const theme = useTheme()

  const [focused, setFocused] = React.useState(false)
  const [hideValueInput, setHideValueInput] = React.useState(false)

  return (
    <LocalStyles.Container>
      <Typography text={label} variant="body4" color={error ? 'nevative400' : 'gray300'} />
      <LocalStyles.ContainerInput focused={focused} hasError={error}>
        <LocalStyles.BaseInput
          {...rest}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          secureTextEntry={!!isPassword && hideValueInput}
        />

        {isPassword && (
          <LocalStyles.ButtonIcon onPress={() => setHideValueInput(!hideValueInput)}>
            <Entypo
              name={hideValueInput ? 'eye-with-line' : 'eye'}
              size={RFValue(26)}
              color={theme.colors.gray300}
            />
          </LocalStyles.ButtonIcon>
        )}
      </LocalStyles.ContainerInput>
    </LocalStyles.Container>
  )
}
