import { Typography } from '@Shared/components/ui'
import * as LocalStyles from './styles'
import { Extrapolation, SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { HEIGHT_CONTENT_SIGNIN } from '../ContentSignin/styles'
import { useWindowDimensions } from 'react-native'

interface InterfaceContentLogo {
  valueContent: SharedValue<number>
}

export function ContentLogo({ valueContent }: InterfaceContentLogo) {
  const { height: heightScreen } = useWindowDimensions()

  const stylesTextIntro = useAnimatedStyle(() => {
    const heightTextIntro = interpolate(
      valueContent.value,
      [0, HEIGHT_CONTENT_SIGNIN],
      [0, LocalStyles.HEIGHT_TEXT_INTRO],
      Extrapolation.CLAMP
    )

    const opacity = interpolate(
      valueContent.value,
      [0, HEIGHT_CONTENT_SIGNIN],
      [0, 1],
      Extrapolation.CLAMP
    )

    return {
      height: heightTextIntro,
      opacity: opacity
    }
  })

  const stylesLogoImage = useAnimatedStyle(() => {
    const scale = interpolate(
      valueContent.value,
      [0, HEIGHT_CONTENT_SIGNIN],
      [0.8, 1],
      Extrapolation.CLAMP
    )

    const calcMargin = (heightScreen - HEIGHT_CONTENT_SIGNIN - LocalStyles.HEIGHT_LOGO_IMAGE) / 2

    const marginTop = interpolate(
      valueContent.value,
      [0, HEIGHT_CONTENT_SIGNIN],
      [calcMargin, 0],
      Extrapolation.CLAMP
    )

    return {
      transform: [
        {
          scale: scale
        }
      ],
      marginTop: -marginTop
    }
  })

  return (
    <>
      <LocalStyles.ContainerTextIntro style={stylesTextIntro}>
        <Typography text="Let's get Starting!" variant="body1" color={'gray100'} />
      </LocalStyles.ContainerTextIntro>

      <LocalStyles.ContainerLogoImage style={stylesLogoImage}>
        <LocalStyles.LogoImage />
      </LocalStyles.ContainerLogoImage>
    </>
  )
}
