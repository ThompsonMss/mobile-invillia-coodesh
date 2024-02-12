import { useSelector } from 'react-redux'
import { RootState } from '@Store/reducers'
import { routeName } from '@Routes/routeName'
import { ItemWordModel } from '@Domain/models/ItemWordModel'
import { useNavigation } from '@react-navigation/native'

export function useController() {
  const data = useSelector((state: RootState) => state.words.dataFavorites)
  const loading = useSelector((state: RootState) => state.words.load)
  const navigation = useNavigation<any>()

  function handleGoDetail(item: ItemWordModel) {
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
