import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface InterfaceContainer {
  backgroundColor: string
  borderColor: string
}

export const Container = styled.TouchableOpacity.attrs<InterfaceContainer>({
  activeOpacity: 0.8
})`
  width: 100%;
  height: ${RFValue(50)}px;

  background-color: ${(props) => props.backgroundColor};
  border-color: ${(props) => props.borderColor};
  border-width: 2px;
  border-style: solid;

  border-radius: ${(props) => props.theme.metrics.borderRadius2}px;

  align-items: center;
  justify-content: center;
`
export const Load = styled.ActivityIndicator.attrs({
  size: 'small'
})``
