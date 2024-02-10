import { Platform } from 'react-native'
import Animated from 'react-native-reanimated'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const HEIGHT_CONTENT_SIGNUP = RFValue(400)

export const Container = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  z-index: 2;

  width: 100%;
  height: ${HEIGHT_CONTENT_SIGNUP}px;

  background-color: ${(props) => props.theme.colors.gray100};
  border-top-right-radius: ${(props) => props.theme.metrics.borderRadius4}px;
  border-top-left-radius: ${(props) => props.theme.metrics.borderRadius4}px;

  padding: 20px;
  padding-bottom: ${Platform.OS === 'ios' ? 40 : 20}px;

  gap: 16px;
  transform: translateY(${HEIGHT_CONTENT_SIGNUP}px);
`

export const ContainerInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  gap: 4px;
`

export const Link = styled.TouchableOpacity``
