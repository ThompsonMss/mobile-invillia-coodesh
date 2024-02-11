import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { RFValue } from 'react-native-responsive-fontsize'
import Animated from 'react-native-reanimated'
import { appInfoConstants } from '@Shared/constants/appInfoConstants'
import { Dimensions } from 'react-native'

interface InterfaceHeader {
  topInset: number
}

export const Header = styled(LinearGradient).attrs<InterfaceHeader>(() => ({
  start: { x: 0.1, y: 0.3 }
}))`
  width: 100%;
  height: ${(props) => RFValue(50) + props.topInset}px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: ${(props) => props.topInset}px;
  align-items: center;
  justify-content: center;
`

export const ContainerLogo = styled(Animated.View)`
  transform: translateX(${Dimensions.get('window').width}px);
`

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
  source: appInfoConstants.logoAppLight
})`
  height: ${RFValue(32)}px;
`
