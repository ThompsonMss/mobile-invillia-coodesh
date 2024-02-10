import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { RFValue } from 'react-native-responsive-fontsize'
import { SafeAreaView as SafeArea } from 'react-native-safe-area-context'

export const Container = styled.View`
  flex: 1;
  position: relative;
`
export const Gradient = styled(LinearGradient).attrs(() => ({
  start: { x: 0.1, y: 0.3 }
}))`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SafeAreaView = styled(SafeArea)`
  flex: 1;
  width: 100%;
  padding: ${(props) => RFValue(props.theme.metrics.spacing4)}px;
`

export const ContainerActions = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const ContainerInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  gap: 4px;
`

export const Link = styled.TouchableOpacity``
