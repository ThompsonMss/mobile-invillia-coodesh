import { useGetDetail } from '@Domain/hooks/words/useGetDetail'
import { ItemWordModel } from '@Domain/models/ItemWordModel'
import { routeName } from '@Routes/routeName'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Alert } from 'react-native'

export function useController() {
  const { data, exec, loading, error, dataNext } = useGetDetail()

  const route = useRoute<RouteProp<{ item: { item: ItemWordModel } }>>()
  const navigation = useNavigation<any>()

  async function getData() {
    await exec(route.params.item.word)
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
      data
    },
    handles: {
      handleGoNext,
      handleGoBack
    }
  }
}
