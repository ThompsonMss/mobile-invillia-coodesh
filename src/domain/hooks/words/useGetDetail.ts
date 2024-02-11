import React from 'react'

import { Observable, catchError, map, take } from 'rxjs'
import { Services } from '@Domain/services'
import { ItemDictionaryModel } from '@Domain/models/ItemDictionaryModel'
import { ItemWordModel } from '@Domain/models/ItemWordModel'

export function useGetDetail() {
  const [data, setData] = React.useState<null | ItemDictionaryModel>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  const [dataNext, setDataNext] = React.useState<ItemWordModel | null>(null)

  const createObservable = (word: string) => {
    return new Observable<{ data: ItemDictionaryModel }>((observer) => {
      Services.words
        .getDetailWord(word)
        .then((data) => {
          observer.next({ data: data as ItemDictionaryModel })
        })
        .catch(() => {
          setError(true)
        })
        .finally(() => observer.complete())
    })
  }

  const exec = (word: string) => {
    setLoading(true)

    Services.words.getNextWord({ word: word }).then((data) => {
      if (data.data) {
        setDataNext(data.data)
      }
    })

    createObservable(word)
      .pipe(
        take(1),
        map((result) => {
          setData(result.data)
          return result.data
        }),
        catchError((error) => {
          setError(true)
          return error
        })
      )
      .subscribe({
        complete: () => {
          setLoading(false)
        }
      })
  }

  return {
    dataNext,
    error,
    loading,
    data,
    exec
  }
}
