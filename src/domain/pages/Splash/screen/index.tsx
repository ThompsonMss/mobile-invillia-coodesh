import React from 'react'

import * as LocalStyles from './styles'
import * as LocalComponents from '../components'

import {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming
} from 'react-native-reanimated'

export function Splash(): React.JSX.Element {
  const valueContainerBrand = useSharedValue(
    LocalStyles.MARGIN_BOTTOM_WRAPPER_BRAND
  )

  const valueOpacityLoad = useSharedValue(0)

  const stylesContainerBrand = useAnimatedStyle(() => {
    return {
      marginBottom: valueContainerBrand.value
    }
  })

  const stylesLoad = useAnimatedStyle(() => {
    return {
      opacity: valueOpacityLoad.value
    }
  })

  React.useEffect(() => {
    valueContainerBrand.value = withDelay(
      1500,
      withTiming(0, { duration: 800 })
    )
    valueOpacityLoad.value = withDelay(2200, withTiming(1, { duration: 800 }))
  }, [])

  return (
    <LocalStyles.Container>
      <LocalStyles.WrapperBrandApp style={stylesContainerBrand}>
        <LocalComponents.Logo />
        <LocalComponents.NameApp />
      </LocalStyles.WrapperBrandApp>

      <LocalStyles.ContainerLoad style={stylesLoad}>
        <LocalStyles.Load />
      </LocalStyles.ContainerLoad>
    </LocalStyles.Container>
  )
}
