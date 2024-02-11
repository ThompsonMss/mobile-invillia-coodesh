import React from 'react'

import { ItemWordModel } from '@Domain/models/ItemWordModel'
import { Observable, catchError, map, take } from 'rxjs'
import { Services } from '@Domain/services'
import { Alert } from 'react-native'

export function useGetWords() {
  const [data, setData] = React.useState<ItemWordModel[]>([])
  const [loading, setLoading] = React.useState(false)
  const [lastKey, setLastKey] = React.useState<string | null>(null)

  const createObservable = (auxLastKey: string | null) => {
    return new Observable<{ data: ItemWordModel[]; lastKey: string | null }>((observer) => {
      Services.words
        .getWords({ lastKey: auxLastKey })
        .then((data) => {
          observer.next(data)
        })
        .catch((error) => {
          observer.error(error)
        })
        .finally(() => observer.complete())
    })
  }

  const exec = (auxLastKey: string | null, auxLoad: boolean) => {
    if (auxLoad) {
      return
    }

    setLoading(true)

    createObservable(auxLastKey)
      .pipe(
        take(1),
        map((result) => {
          // Verificando palavras duplicadas.
          const newData: ItemWordModel[] = [...data]

          result.data.forEach((newWord) => {
            const hasWord = newData.find((itemData) => itemData.id === newWord.id)

            if (!hasWord) {
              newData.push(newWord)
            }
          })

          setData(newData)
          setLastKey(result.lastKey)

          return newData
        }),
        catchError((error) => {
          Alert.alert('Attention', `Unable to recover data.\nError: ${error.message}`)
          return error
        })
      )
      .subscribe({
        complete: () => {
          setLoading(false)
        }
      })
  }

  React.useEffect(() => {
    exec(lastKey, loading)
  }, [])

  return {
    loading,
    lastKey,
    data,
    exec
  }
}
