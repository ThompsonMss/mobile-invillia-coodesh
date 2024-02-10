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

export function ContentSignup({
  valueContent,
  handleHideForms,
  formSelected
}: InterfaceContentSignin) {
  const controller = useController()

  const stylesKeyboard: any = {
    top: formSelected ? (controller.states.keyboardOpen === true ? 0 : 'auto') : 'auto',
    height: formSelected ? (controller.states.keyboardOpen ? '100%' : 'auto') : 'auto',
    paddingTop: formSelected ? (controller.states.keyboardOpen ? 80 : 20) : 20
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
        <Typography text="Cadastro" variant="heading" color={'gray600'} />

        <Controller
          control={controller.states.control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              label="E-mail:"
              placeholder="Ex.: fulano@gmail.com"
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
              label="Senha:"
              placeholder="Insira sua senha"
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
          text="Cadastrar"
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
              <Typography text="Voltar" variant="anco2" color={'secondary'} />
            </LocalStyles.Link>
          </LocalStyles.ContainerInfo>
        )}
      </LocalStyles.Container>
    </TouchableWithoutFeedback>
  )
}
