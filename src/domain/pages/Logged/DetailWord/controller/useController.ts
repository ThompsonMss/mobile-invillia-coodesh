import { useGetDetail } from '@Domain/hooks/words/useGetDetail'
import { ItemWordModel } from '@Domain/models/ItemWordModel'
import { routeName } from '@Routes/routeName'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Alert } from 'react-native'

import { Audio } from 'expo-av'

export function useController() {
  const { data, exec, loading, error, dataNext } = useGetDetail()

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
        const { sound } = await Audio.Sound.createAsync({ uri: hasSound }, { shouldPlay: true })
        await sound.playAsync()
      } catch (error) {
        Alert.alert('Attention', 'Error sound')
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
    }
  }

  return {
    states: {
      dataNext,
      error,
      loading,
      data,
      hasSound,
      meanings
    },
    handles: {
      handleGoNext,
      handleGoBack,
      playAudio
    }
  }
}
