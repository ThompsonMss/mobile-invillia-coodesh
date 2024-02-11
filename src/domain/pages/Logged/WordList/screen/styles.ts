import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.metrics.spacing4}px;
`

export const ScrollView = styled.ScrollView`
  margin-top: ${(props) => props.theme.metrics.spacing4}px;
`

export const ContentWords = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  flex: 1;
`

export const ContainerLoadList = styled.View`
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
