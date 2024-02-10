import { Button, Input, Typography } from '@Shared/components/ui'
import * as LocalStyles from './styles'
import { SharedValue, useAnimatedStyle } from 'react-native-reanimated'

interface InterfaceContentSignin {
  valueContent: SharedValue<number>
  handleShowFormSingin: () => void
}

export function ContentSignup({ valueContent, handleShowFormSingin }: InterfaceContentSignin) {
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
    <LocalStyles.Container style={styles}>
      <Typography text="Cadastro" variant="heading" color={'gray600'} />

      <Input label="E-mail:" />

      <Input label="Senha:" isPassword />

      <Button text="Entrar" variant="primary" />

      <LocalStyles.ContainerInfo>
        <Typography text="Você já possui uma conta?" variant="anco1" color={'gray600'} />
        <LocalStyles.Link onPress={handleShowFormSingin}>
          <Typography text="Login." variant="anco2" color={'secondary'} />
        </LocalStyles.Link>
      </LocalStyles.ContainerInfo>
    </LocalStyles.Container>
  )
}
