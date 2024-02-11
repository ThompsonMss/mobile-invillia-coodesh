import { useSelector } from 'react-redux'
import { RootState } from '@Store/reducers'
import { ItemWordHistoryModel } from '@Domain/models/ItemWordHistoryModel'
import { routeName } from '@Routes/routeName'
import { useNavigation } from '@react-navigation/native'

export function useController() {
  const data = useSelector((state: RootState) => state.words.dataHistory)
  const loading = useSelector((state: RootState) => state.words.load)

  const navigation = useNavigation<any>()

  function handleGoDetail(item: ItemWordHistoryModel) {
    navigation.navigate(routeName.Detail, { item: item })
  }

  return {
    states: {
      data,
      loading
    },
    handles: {
      handleGoDetail
    }
  }
}
