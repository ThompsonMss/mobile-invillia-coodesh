import { useSelector } from 'react-redux'
import { RootState } from '@Store/reducers'

export function useController() {
  const data = useSelector((state: RootState) => state.words.dataHistory)
  const loading = useSelector((state: RootState) => state.words.load)

  return {
    states: {
      data,
      loading
    }
  }
}
