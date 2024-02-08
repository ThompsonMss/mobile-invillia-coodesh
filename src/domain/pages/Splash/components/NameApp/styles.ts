import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Text = styled(Animated.Text)`
  transform: translateX(-${Dimensions.get('screen').height}px);
  font-size: ${RFValue(22)}px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.gray600};
`
