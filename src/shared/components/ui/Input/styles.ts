import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  gap: 4px;
`

interface InterfaceContainerInput {
  hasError?: boolean
  focused?: boolean
}

export const ContainerInput = styled.View<InterfaceContainerInput>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  background-color: ${(props) => props.theme.colors.gray150};
  border-radius: ${(props) => props.theme.metrics.borderRadius2}px;
  padding: 4px 0px 4px 12px;

  border-width: 2px;
  border-style: solid;

  ${(props) => {
    if (props.focused) {
      return css`
        border-color: ${props.theme.colors.primary};
      `
    }

    if (props.hasError) {
      return css`
        border-color: ${props.theme.colors.nevative400};
      `
    }

    return css`
      border-color: ${props.theme.colors.gray250};
    `
  }};
`

export const BaseInput = styled.TextInput`
  flex: 1;
  height: ${RFValue(36)}px;

  font-size: ${RFValue(18)}px;
  color: ${(props) => props.theme.colors.gray600};
`

export const ButtonIcon = styled.TouchableOpacity`
  padding-right: 12px;
  height: ${RFValue(36)}px;
  justify-content: center;
`
