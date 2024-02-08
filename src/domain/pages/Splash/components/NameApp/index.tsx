import React from 'react'
import { useWindowDimensions } from 'react-native'

import * as LocalStyles from './styles'

import { appInfoConstants } from '@Shared/constants/appInfoConstants'

import {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withSpring
} from 'react-native-reanimated'

export function NameApp() {
  const { height: heightScreen } = useWindowDimensions()
  const animatedText = useSharedValue(-heightScreen)

  React.useEffect(() => {
    animatedText.value = withDelay(200, withSpring(0, { duration: 3000 }))
  }, [])

  const stylesText = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: animatedText.value
        }
      ]
    }
  })

  return (
    <LocalStyles.Text style={stylesText}>
      {appInfoConstants.name}
    </LocalStyles.Text>
  )
}
