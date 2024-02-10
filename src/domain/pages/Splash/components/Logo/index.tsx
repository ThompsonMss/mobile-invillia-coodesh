import React from 'react'
import { useWindowDimensions } from 'react-native'

import * as LocalStyles from './styles'

import { appInfoConstants } from '@Shared/constants/appInfoConstants'

import {
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated'

export function Logo() {
  const { height: heightScreen } = useWindowDimensions()
  const animatedLogo = useSharedValue(heightScreen)

  React.useEffect(() => {
    animatedLogo.value = withSpring(0, { duration: 3000 })
  }, [])

  const stylesLogo = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: animatedLogo.value
        }
      ]
    }
  })

  return (
    <LocalStyles.Image
      style={stylesLogo}
      source={appInfoConstants.logo}
      alt="Logotipo do aplicativo"
    />
  )
}
