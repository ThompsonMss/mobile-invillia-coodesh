import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  padding: ${(props) => RFValue(props.theme.metrics.spacing2)}px
    ${(props) => RFValue(props.theme.metrics.spacing3)}px;
  background-color: ${(props) => props.theme.colors.gray0};
  border-radius: 100px;
`
