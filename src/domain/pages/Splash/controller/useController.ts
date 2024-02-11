import React from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { routeName } from '@Routes/routeName'
import { Observable } from 'rxjs'
import { Services } from '@Domain/services'

export function useController(): void {
  const navigation = useNavigation<any>()
  const observable = new Observable((subs) => {
    setTimeout(() => {
      Services.auth
        .logged()
        .then((response) => {
          subs.next(response)
        })
        .catch((error) => {
          subs.error(error)
        })
        .finally(() => {
          subs.complete()
        })
    }, 3200)
  })

  React.useEffect(() => {
    const subscription = observable.subscribe(onSuccess, onError)

    // Certifique-se de cancelar a assinatura ao desmontar o componente
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  function onSuccess(logged: any) {
    if (logged) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: routeName.Home
            }
          ]
        })
      )
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: routeName.Home // TODO
            }
          ]
        })
      )
    }
  }
  function onError() {}
}
