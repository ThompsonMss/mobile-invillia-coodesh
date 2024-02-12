import { useGetDetail } from '@Domain/hooks/words/useGetDetail'
import { ItemWordModel } from '@Domain/models/ItemWordModel'
import { routeName } from '@Routes/routeName'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Alert } from 'react-native'

import { Audio } from 'expo-av'
import { Services } from '@Domain/services'
import { WordsActions } from '@Store/ducks/words'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '@Store/reducers'

export function useController() {
  const dispatch = useDispatch()
  const { data, exec, loading, error, dataNext } = useGetDetail()
  const favorites = useSelector((state: RootState) => state.words.dataFavorites)
  const idUser = useSelector((state: RootState) => state.auth.uid)

  const isFavorite: ItemWordModel | null = React.useMemo(() => {
    if (data?.word) {
      const has = favorites.find((item) => item.word === data?.word)
      return has ? has : null
    }

    return null
  }, [data, favorites])

  const hasSound: string | null = React.useMemo(() => {
    if (data?.phonetics.length) {
      const dataAudio = data?.phonetics.find((item) => !!item.audio)

      if (dataAudio) {
        return dataAudio.audio
      }
    }

    return null
  }, [data])

  const meanings: string | null = React.useMemo(() => {
    let dataDefinition: string | null = null

    if (data?.meanings.length) {
      data?.meanings.forEach((item) => {
        const definition = item.definitions.find((definition) => !!definition.definition)
        if (definition) {
          dataDefinition = definition.definition
        }
      })
    }

    return dataDefinition
  }, [data])

  const route = useRoute<RouteProp<{ item: { item: ItemWordModel } }>>()
  const navigation = useNavigation<any>()

  async function getData() {
    await exec(route.params.item.word)
  }

  const playAudio = async () => {
    if (hasSound) {
      try {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true
        })

        const { sound } = await Audio.Sound.createAsync({ uri: hasSound }, { shouldPlay: true })
        await sound.playAsync()
      } catch (error) {
        Alert.alert('Attention', 'Error playing audio')
      }
    }
  }

  React.useEffect(() => {
    navigation.setOptions({ title: route.params.item.word.toLocaleUpperCase() })
    getData()
  }, [])

  React.useEffect(() => {
    if (error) {
      Alert.alert(
        'Attention',
        `This word was not found in the online dictionary.`,
        [{ onPress: () => navigation.goBack(), text: 'Go back' }],
        { cancelable: false }
      )
    }
  }, [error])

  function handleGoBack() {
    navigation.goBack()
  }

  function handleGoNext() {
    if (dataNext !== null) {
      navigation.replace(routeName.Detail, { item: dataNext })

      Services.words
        .saveHistory(dataNext, idUser as string)
        .then((success) => {
          if (success) {
            dispatch(
              WordsActions.updateHistory({ ...dataNext, createdAt: new Date().toISOString() })
            )
          }
        })
        .catch((error) => {
          Alert.alert('Attention', `Unable to save word in history.\nError:${error?.message}`)
        })
    }
  }

  async function handleFavorite() {
    try {
      if (data?.word) {
        if (isFavorite) {
          Services.words.deleteFavorite(isFavorite.id, idUser as string)
          dispatch(WordsActions.deleteFavorite(data?.word))
        } else {
          await Services.words.saveFavorites({ id: data?.word, word: data?.word }, idUser as string)
          dispatch(WordsActions.updateFavorites({ id: data?.word, word: data?.word }))
        }
      }
    } catch (error) {
      Alert.alert('Attention', ``)
    }
  }

  return {
    states: {
      dataNext,
      error,
      loading,
      data,
      hasSound,
      meanings,
      isFavorite
    },
    handles: {
      handleGoNext,
      handleGoBack,
      playAudio,
      handleFavorite
    }
  }
}
