import styled from 'styled-components/native'
import { SafeAreaView as SafeArea } from 'react-native-safe-area-context'
import { RFValue } from 'react-native-responsive-fontsize'

import AntDesign from 'react-native-vector-icons/AntDesign'

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: ${(props) => props.theme.metrics.spacing4}px;
`

export const SafeAreaView = styled(SafeArea).attrs({
  edges: ['bottom', 'left', 'right']
})`
  flex: 1;
`

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1
  }
})`
  flex: 1;
  flex-grow: 1;
`

export const Frame = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;

  background-color: ${(props) => props.theme.colors.gray0};
  padding: ${(props) => props.theme.metrics.spacing4}px;

  border-radius: ${(props) => props.theme.metrics.borderRadius3}px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.gray200};

  min-height: ${RFValue(200)}px;
  margin-bottom: 16px;
`

export const Nav = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`
export const WrapperNav = styled.View`
  flex: 1;
`
export const Favorite = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 16px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.colors.gray200};
  padding-bottom: 16px;
`

export const ButtonFavorite = styled.View``

export const IconFavorite = styled(AntDesign).attrs(() => ({
  size: 30
}))``

export const ToHear = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 16px;
`

export const ButtonPlay = styled.TouchableOpacity``

export const Icon = styled(AntDesign).attrs(() => ({
  size: 40
}))``

export const ContainerLoad = styled.View`
  width: 100%;
  height: 50px;
  margin-top: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
`
export const LoadList = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 'small',
  color: theme.colors.primary
}))``
