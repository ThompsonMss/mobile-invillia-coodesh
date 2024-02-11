import styled from 'styled-components/native'
import { SafeAreaView as SafeArea } from 'react-native-safe-area-context'

export const SafeAreaView = styled(SafeArea).attrs({
  edges: ['right', 'bottom', 'left']
})`
  flex: 1;
`
