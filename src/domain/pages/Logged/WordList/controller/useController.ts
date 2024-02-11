import { useGetWords } from '@Domain/hooks/words/useGetWords'
import { ItemWordModel } from '@Domain/models/ItemWordModel'
import { Services } from '@Domain/services'
import { routeName } from '@Routes/routeName'
import { WordsActions } from '@Store/ducks/words'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'

export function useController() {
  const { data, loading, lastKey, exec } = useGetWords()

  const dispatch = useDispatch()
  const navigation = useNavigation<any>()

  function handleGoDetail(item: ItemWordModel) {
    navigation.navigate(routeName.Detail, { item: item })
  }

  function handleSaveHistory(item: ItemWordModel) {
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

  return {
    states: {
      data,
      loading,
      lastKey
    },
    handles: {
      exec,
      handleSaveHistory,
      handleGoDetail
    }
  }
}
