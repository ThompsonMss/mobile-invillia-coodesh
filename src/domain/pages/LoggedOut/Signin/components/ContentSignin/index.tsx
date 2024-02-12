import React from 'react'
import { Button, Input, Typography } from '@Shared/components/ui'
import * as LocalStyles from './styles'
import { SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useController } from './controller/useController'

import { Controller } from 'react-hook-form'

interface InterfaceContentSignin {
  valueContent: SharedValue<number>
  handleHideForms: () => void
  formSelected: boolean
}

export function ContentSignin({
  valueContent,
  handleHideForms,
  formSelected
}: InterfaceContentSignin) {
  const controller = useController()

  const stylesKeyboard: any =
    formSelected && controller.states.keyboardOpen
      ? {
          top: 0,
          height: '100%',
          paddingTop: 80
        }
      : {
          height: 'auto',
          paddingTop: 20,
          bottom: 0
        }

  const styles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: valueContent.value
        }
      ]
    }
  })

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LocalStyles.Container style={[styles, stylesKeyboard]}>
        <Typography text="Login" variant="heading" color={'gray600'} />

        <Controller
          control={controller.states.control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Mail:"
              placeholder="Enter your email"
              onChangeText={onChange}
              value={value}
              error={!!controller.states.errors['email']}
              onSubmitEditing={() => controller.refs.refInputPassword.current?.focus()}
              returnKeyType="next"
              ref={controller.refs.refInputEmail}
              keyboardType="email-address"
            />
          )}
          rules={{
            required: true
          }}
        />

        <Controller
          control={controller.states.control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Password:"
              placeholder="Enter your password"
              onChangeText={onChange}
              value={value}
              error={!!controller.states.errors['password']}
              isPassword
              ref={controller.refs.refInputPassword}
              onSubmitEditing={() => controller.handles.handleSubmit()}
              returnKeyType="send"
              keyboardType="visible-password"
            />
          )}
          rules={{
            required: true
          }}
        />

        <Button
          text="Enter"
          loading={controller.states.loading}
          variant="primary"
          onPress={controller.handles.handleSubmit}
        />

        {controller.states.keyboardOpen === false && (
          <LocalStyles.ContainerInfo>
            <LocalStyles.Link
              onPress={() => {
                Keyboard.dismiss()
                handleHideForms()
              }}
            >
              <Typography text="Go back" variant="anco2" color={'secondary'} />
            </LocalStyles.Link>
          </LocalStyles.ContainerInfo>
        )}
      </LocalStyles.Container>
    </TouchableWithoutFeedback>
  )
}
