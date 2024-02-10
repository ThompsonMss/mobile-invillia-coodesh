import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Image = styled(Animated.Image)`
  transform: translateX(-${Dimensions.get('screen').height}px);
  width: ${RFValue(136)}px;
  height: ${RFValue(22)}px;
`
