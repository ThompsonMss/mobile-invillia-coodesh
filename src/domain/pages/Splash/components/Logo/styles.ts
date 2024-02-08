import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { Dimensions } from 'react-native'

export const Image = styled(Animated.Image)`
  width: 100px;
  height: 121px;
  transform: translateX(${Dimensions.get('screen').height}px);
`
