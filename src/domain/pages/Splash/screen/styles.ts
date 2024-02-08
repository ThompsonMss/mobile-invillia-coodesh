import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.metrics.spacing4}px;
  background-color: ${(props) => props.theme.colors.gray100};
`

const HEIGHT_LOAD = 40

// measurement 16 is the container gap
export const MARGIN_BOTTOM_WRAPPER_BRAND = -(HEIGHT_LOAD + 16)

export const WrapperBrandApp = styled(Animated.View)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.metrics.spacing2}px;
  margin-bottom: ${MARGIN_BOTTOM_WRAPPER_BRAND}px;
`
export const ContainerLoad = styled(Animated.View)`
  height: ${HEIGHT_LOAD}px;
  opacity: 0;
`

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.gray300,
  size: 'large'
}))``
