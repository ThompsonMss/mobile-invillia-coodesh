import { useAnimatedStyle, useSharedValue, withDelay, withSpring } from 'react-native-reanimated'
import * as LocalStyles from './styles'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components/native'
import { useWindowDimensions } from 'react-native'
import React from 'react'

export function Header() {
  const theme = useTheme()
  const { top: topInset } = useSafeAreaInsets()

  const { width } = useWindowDimensions()
  const valueImage = useSharedValue(width)

  const styles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: valueImage.value
        }
      ]
    }
  })

  React.useEffect(() => {
    valueImage.value = withDelay(1000, withSpring(0, { duration: 1500 }))
  }, [])

  return (
    <LocalStyles.Header topInset={topInset} colors={[theme.colors.primary, theme.colors.secondary]}>
      <LocalStyles.ContainerLogo style={styles}>
        <LocalStyles.Logo />
      </LocalStyles.ContainerLogo>
    </LocalStyles.Header>
  )
}
