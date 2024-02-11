import { ItemWordHistoryModel } from '@Domain/models/ItemWordHistoryModel'
import { ItemWordModel } from '@Domain/models/ItemWordModel'
import { Services } from '@Domain/services'
import { WordsActions } from '@Store/ducks/words'
import React from 'react'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { Observable } from 'rxjs'

interface InterfaceTypeValue {
  type: 'history' | 'favorites'
  data: ItemWordModel[] | ItemWordHistoryModel[]
}

export function useController() {
  const dispatch = useDispatch()

  function getWords(): Promise<{ history: ItemWordHistoryModel[]; favorites: ItemWordModel[] }> {
    return new Promise((resolve, reject) => {
      const historyPromise = Services.words.getHistory()
      const favoritesPromise = Services.words.getFavorites()

      Promise.all([historyPromise, favoritesPromise])
        .then(([historyData, favoritesData]) => {
          resolve({ history: historyData, favorites: favoritesData })
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  React.useEffect(() => {
    dispatch(WordsActions.updateLoad(true))

    const observable = new Observable<InterfaceTypeValue>((subs) => {
      getWords()
        .then((result) => {
          subs.next({ type: 'history', data: result.history })
          subs.next({ type: 'favorites', data: result.favorites })
        })
        .catch((error) => {
          subs.error(error)
        })
        .finally(() => subs.complete())
    })

    observable.subscribe({
      next(value: InterfaceTypeValue) {
        if (value.type === 'favorites') {
          dispatch(WordsActions.setFavorites(value.data))
        }

        if (value.type === 'history') {
          dispatch(WordsActions.setHistory(value.data as ItemWordHistoryModel[]))
        }
      },
      error() {
        Alert.alert('Attention', `Unable to recover history`)
      },
      complete() {
        dispatch(WordsActions.updateLoad(false))
      }
    })
  }, [])
}
