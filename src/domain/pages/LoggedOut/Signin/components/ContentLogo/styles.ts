import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { appInfoConstants } from '@Shared/constants/appInfoConstants'
import { RFValue } from 'react-native-responsive-fontsize'

export const HEIGHT_TEXT_INTRO = RFValue(100)

export const ContainerTextIntro = styled(Animated.View)`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  height: ${HEIGHT_TEXT_INTRO}px;
  margin-top: ${RFValue(50)}px;
  opacity: 1;
`

export const ContainerLogoImage = styled(Animated.View)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  transform: scale(1);
`

export const HEIGHT_LOGO_IMAGE = RFValue(155.74)

export const LogoImage = styled.Image.attrs({
  source: appInfoConstants.logoAppWithNameLight
})`
  width: ${RFValue(137)}px;
  height: ${HEIGHT_LOGO_IMAGE}px;
`
