import React from 'react'

import * as LocalStyles from './styles'
import * as LocalComponents from '../components'

import * as UI from '@Shared/components/ui'

import { useTheme } from 'styled-components/native'
import { useSharedValue, withDelay, withSequence, withTiming } from 'react-native-reanimated'
import { HEIGHT_CONTENT_SIGNIN } from '../components/ContentSignin/styles'
import { HEIGHT_CONTENT_SIGNUP } from '../components/ContentSignup/styles'

export type TypeFormSelected = 'signin' | 'signup' | null

export function Signin() {
  const theme = useTheme()

  const valueContentForms = useSharedValue(HEIGHT_CONTENT_SIGNIN)

  const valueContentFormSignin = useSharedValue(HEIGHT_CONTENT_SIGNIN)
  const valueContentFormSignup = useSharedValue(HEIGHT_CONTENT_SIGNUP)

  const [formSelected, setFormSelected] = React.useState<TypeFormSelected>(null)

  function handleShowFormSingup() {
    setFormSelected('signup')

    if (valueContentFormSignin.value === HEIGHT_CONTENT_SIGNIN) {
      valueContentFormSignup.value = withTiming(0, { duration: 600 })
      valueContentForms.value = withTiming(0, { duration: 600 })
    } else {
      valueContentFormSignin.value = withTiming(HEIGHT_CONTENT_SIGNIN, {
        duration: 600
      })
      valueContentFormSignup.value = withDelay(600, withTiming(0, { duration: 600 }))

      valueContentForms.value = withSequence(
        withTiming(HEIGHT_CONTENT_SIGNIN, {
          duration: 600
        }),
        withTiming(0, { duration: 600 })
      )
    }
  }

  function handleShowFormSingin() {
    setFormSelected('signin')

    if (valueContentFormSignup.value === HEIGHT_CONTENT_SIGNUP) {
      valueContentFormSignin.value = withTiming(0, { duration: 600 })
      valueContentForms.value = withTiming(0, { duration: 600 })
    } else {
      valueContentFormSignup.value = withTiming(HEIGHT_CONTENT_SIGNUP, {
        duration: 600
      })
      valueContentFormSignin.value = withDelay(600, withTiming(0, { duration: 600 }))

      valueContentForms.value = withSequence(
        withTiming(HEIGHT_CONTENT_SIGNIN, {
          duration: 600
        }),
        withTiming(0, { duration: 600 })
      )
    }
  }

  function handleHideForms() {
    valueContentFormSignin.value = withTiming(HEIGHT_CONTENT_SIGNIN, { duration: 600 })
    valueContentFormSignup.value = withTiming(HEIGHT_CONTENT_SIGNUP, { duration: 600 })
    valueContentForms.value = withTiming(HEIGHT_CONTENT_SIGNUP, { duration: 600 })
  }

  return (
    <LocalStyles.Container>
      <LocalStyles.Gradient colors={[theme.colors.primary, theme.colors.secondary]}>
        <LocalStyles.SafeAreaView>
          <LocalComponents.ContentLogo valueContent={valueContentForms} />
          <LocalStyles.ContainerActions>
            <UI.Button text="Login" onPress={handleShowFormSingin} variant="inverse" />

            <LocalStyles.ContainerInfo>
              <UI.Typography text="Não tenho uma conta?" variant="anco1" color={'gray100'} />
              <LocalStyles.Link onPress={handleShowFormSingup}>
                <UI.Typography text="Registre-se!" variant="anco2" color={'inverse'} />
              </LocalStyles.Link>
            </LocalStyles.ContainerInfo>
          </LocalStyles.ContainerActions>
        </LocalStyles.SafeAreaView>
      </LocalStyles.Gradient>

      <LocalComponents.ContentSignin
        valueContent={valueContentFormSignin}
        handleHideForms={handleHideForms}
        formSelected={formSelected === 'signin'}
      />

      <LocalComponents.ContentSignup
        valueContent={valueContentFormSignup}
        handleHideForms={handleHideForms}
        formSelected={formSelected === 'signup'}
      />
    </LocalStyles.Container>
  )
}
