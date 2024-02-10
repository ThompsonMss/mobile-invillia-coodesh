import React from 'react'

import * as LocalStyles from './styles'
import * as LocalComponents from '../components'

import * as UI from '@Shared/components/ui'

import { useTheme } from 'styled-components/native'
import { useSharedValue, withDelay, withSequence, withTiming } from 'react-native-reanimated'
import { HEIGHT_CONTENT_SIGNIN } from '../components/ContentSignin/styles'
import { HEIGHT_CONTENT_SIGNUP } from '../components/ContentSignup/styles'

export function Signin() {
  const theme = useTheme()

  const valueContentForms = useSharedValue(HEIGHT_CONTENT_SIGNIN)

  const valueContentFormSignin = useSharedValue(HEIGHT_CONTENT_SIGNIN)
  const valueContentFormSignup = useSharedValue(HEIGHT_CONTENT_SIGNUP)

  function handleShowFormSingup() {
    if (valueContentFormSignin.value === HEIGHT_CONTENT_SIGNIN) {
      valueContentFormSignup.value = withTiming(0, { duration: 1000 })
      valueContentForms.value = withTiming(0, { duration: 1000 })
    } else {
      valueContentFormSignin.value = withTiming(HEIGHT_CONTENT_SIGNIN, {
        duration: 1000
      })
      valueContentFormSignup.value = withDelay(1000, withTiming(0, { duration: 1000 }))

      valueContentForms.value = withSequence(
        withTiming(HEIGHT_CONTENT_SIGNIN, {
          duration: 1000
        }),
        withTiming(0, { duration: 1000 })
      )
    }
  }

  function handleShowFormSingin() {
    if (valueContentFormSignup.value === HEIGHT_CONTENT_SIGNUP) {
      valueContentFormSignin.value = withTiming(0, { duration: 1000 })
      valueContentForms.value = withTiming(0, { duration: 1000 })
    } else {
      valueContentFormSignup.value = withTiming(HEIGHT_CONTENT_SIGNUP, {
        duration: 1000
      })
      valueContentFormSignin.value = withDelay(1000, withTiming(0, { duration: 1000 }))

      valueContentForms.value = withSequence(
        withTiming(HEIGHT_CONTENT_SIGNIN, {
          duration: 1000
        }),
        withTiming(0, { duration: 1000 })
      )
    }
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
        handleShowFormSingup={handleShowFormSingup}
      />

      <LocalComponents.ContentSignup
        valueContent={valueContentFormSignup}
        handleShowFormSingin={handleShowFormSingin}
      />
    </LocalStyles.Container>
  )
}
