import { useGetWords } from '@Domain/hooks/words/useGetWords'

export function useController() {
  const { data, loading, lastKey, exec } = useGetWords()

  return {
    states: {
      data,
      loading,
      lastKey
    },
    handles: {
      exec
    }
  }
}
