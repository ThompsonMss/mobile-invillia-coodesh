import React from 'react'
import { Alert, Keyboard, TextInput } from 'react-native'

import { useForm } from 'react-hook-form'
import { UserModel } from '@Domain/models/UserModel'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { routeName } from '@Routes/routeName'
import { useSignin } from '@Domain/hooks/auth/useSignin'
import { useDispatch } from 'react-redux'
import { AuthActions } from '@Store/ducks/auth'

interface InterfaceForm {
  email: string
  password: string
}

export function useController() {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const refInputEmail = React.useRef<TextInput>()
  const refInputPassword = React.useRef<TextInput>()

  /**
   * CONTROLLER KEYBOARD
   */

  const [keyboardOpen, setKeyboardOpen] = React.useState(false)

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardOpen(true)
    })
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOpen(false)
    })

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  /**
   * CONTROLLER FORM
   */

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<InterfaceForm>()

  const { loading, exec } = useSignin()

  async function handleSigin(data: InterfaceForm) {
    if (data.password.length < 6) {
      return Alert.alert('Atenção', 'A senha precisa ter no mínimo 6 caracteres.')
    }

    exec(data).subscribe(onSuccess, onError)
  }

  function onSuccess(data: UserModel) {
    dispatch(AuthActions.saveUser(data.user.uid))

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
  }

  function onError(error: any) {
    Alert.alert(
      'Atenção',
      `Não foi possível realizar o login. Por favor tente novamente.\n\nErro: ${error.message}`
    )
  }

  return {
    states: {
      keyboardOpen,
      control,
      errors,
      loading
    },
    refs: {
      refInputEmail,
      refInputPassword
    },
    handles: {
      handleSubmit: handleSubmit(handleSigin)
    }
  }
}
