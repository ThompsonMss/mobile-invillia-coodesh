import { Typography } from '@Shared/components/ui'
import * as LocalStyles from './styles'

import { ItemWordModel } from '@Domain/models/ItemWordModel'

import Icon from 'react-native-vector-icons/AntDesign'
import { useTheme } from 'styled-components/native'

interface CardWord {
  item: ItemWordModel
  isFavorite?: boolean
  onPress?: (...args: any) => void
}

export function CardWord({ item, isFavorite, onPress = () => null }: CardWord) {
  const theme = useTheme()

  return (
    <LocalStyles.Container onPress={onPress}>
      <Typography style={{ textAlign: 'center' }} text={item.word} variant="body3" />

      {isFavorite && <Icon name="star" color={theme.colors.inverse} />}
    </LocalStyles.Container>
  )
}
