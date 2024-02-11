import styled from 'styled-components/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const Container = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.metrics.spacing4}px;
`

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    gap: 12
  }
})`
  margin-top: ${(props) => props.theme.metrics.spacing4}px;
`

export const Card = styled.TouchableOpacity.attrs({ activeOpacity: 0.5 })`
  background-color: ${(props) => props.theme.colors.gray0};
  padding: ${(props) => props.theme.metrics.spacing3}px;
  border-radius: ${(props) => props.theme.metrics.borderRadius2}px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const WrapperCard = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  flex: 1;
`

export const SectionCard = styled.View``

export const ContainerInfoList = styled.View`
  width: 100%;
  height: 50px;
  margin-top: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
`
export const IconArrow = styled(MaterialIcons).attrs(({ theme }) => ({
  name: 'keyboard-arrow-right',
  color: theme.colors.gray300,
  size: 26
}))``

export const LoadList = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 'small',
  color: theme.colors.primary
}))``
