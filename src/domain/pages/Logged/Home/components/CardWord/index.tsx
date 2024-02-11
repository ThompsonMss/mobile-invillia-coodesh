import { Typography } from '@Shared/components/ui'
import * as LocalStyles from './styles'

import { ItemWordModel } from '@Domain/models/ItemWordModel'

interface CardWord {
  item: ItemWordModel
}

export function CardWord({ item }: CardWord) {
  return (
    <LocalStyles.Container>
      <Typography style={{ textAlign: 'center' }} text={item.word} variant="body3" />
    </LocalStyles.Container>
  )
}
