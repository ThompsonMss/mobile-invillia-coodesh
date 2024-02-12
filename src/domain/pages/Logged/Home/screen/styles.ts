import styled from 'styled-components/native'
import { SafeAreaView as SafeArea } from 'react-native-safe-area-context'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { RFValue } from 'react-native-responsive-fontsize'

export const SafeAreaView = styled(SafeArea).attrs({
  edges: ['right', 'bottom', 'left']
})`
  flex: 1;
  position: relative;
`
export const ButtonLogout = styled.TouchableOpacity.attrs({ activeOpacity: 0.5 })`
  position: absolute;
  right: 16px;
  bottom: 16px;

  height: ${RFValue(60)}px;
  width: ${RFValue(60)}px;
  border-radius: ${RFValue(30)}px;

  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`

export const IconLogout = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.colors.gray0,
  size: 26
}))``
