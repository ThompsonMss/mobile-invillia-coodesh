import { Typography } from '@Shared/components/ui'
import * as LocalStyles from './styles'

import { ItemWordModel } from '@Domain/models/ItemWordModel'
import { Services } from '@Domain/services'

import Icon from 'react-native-vector-icons/AntDesign'
import { useTheme } from 'styled-components/native'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { WordsActions } from '@Store/ducks/words'

interface CardWord {
  item: ItemWordModel
  isFavorite?: boolean
}

export function CardWord({ item, isFavorite }: CardWord) {
  const theme = useTheme()
  const dispatch = useDispatch()

  function handleSaveHistory() {
    Services.words
      .saveHistory(item)
      .then((success) => {
        if (success) {
          dispatch(WordsActions.updateHistory({ ...item, createdAt: new Date().toISOString() }))
        }
      })
      .catch((error) => {
        Alert.alert('Attention', `Unable to save word in history.\nError:${error?.message}`)
      })
  }

  return (
    <LocalStyles.Container
      onPress={async () => {
        handleSaveHistory()
      }}
    >
      <Typography style={{ textAlign: 'center' }} text={item.word} variant="body3" />

      {isFavorite && <Icon name="star" color={theme.colors.inverse} />}
    </LocalStyles.Container>
  )
}
