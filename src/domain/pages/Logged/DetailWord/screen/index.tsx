import { Button, Typography } from '@Shared/components/ui'
import { useController } from '../controller/useController'
import * as Localstyles from './styles'
import { Alert } from 'react-native'
import { useTheme } from 'styled-components/native'

export function DetailWord() {
  const controller = useController()
  const theme = useTheme()

  if (controller.states.loading || controller.states.error) {
    return (
      <Localstyles.ContainerLoad>
        <Typography text="Carregando" variant="body4" color={'primary'} />
        <Localstyles.LoadList />
      </Localstyles.ContainerLoad>
    )
  }

  return (
    <Localstyles.Container>
      <Localstyles.SafeAreaView>
        <Localstyles.ScrollView>
          <Localstyles.Frame>
            <Typography text={controller.states.data?.word ?? ''} variant="body2" color="gray400" />
            <Typography
              text={
                controller.states.data?.phonetic
                  ? controller.states.data?.phonetic
                      .replace('/', '')
                      .replace('/', '')
                      .replace('ˌ', '')
                  : ''
              }
              variant="body3"
              color="gray300"
            />
          </Localstyles.Frame>

          <Localstyles.Favorite
            onPress={() => {
              controller.handles.handleFavorite()
            }}
          >
            <Localstyles.ButtonFavorite>
              <Localstyles.IconFavorite
                name="star"
                color={controller.states.isFavorite ? theme.colors.inverse : theme.colors.gray300}
              />
            </Localstyles.ButtonFavorite>
            <Typography
              text={
                controller.states.isFavorite ? 'Is a favorite word' : 'Do you want to favorite?'
              }
              variant="body2"
              color="gray300"
            />
          </Localstyles.Favorite>

          <Localstyles.ToHear>
            <Localstyles.ButtonPlay
              onPress={() => {
                if (controller.states.hasSound) {
                  controller.handles.playAudio()
                } else {
                  Alert.alert('Attention', 'Audio is not available')
                }
              }}
            >
              <Localstyles.Icon name="play" />
            </Localstyles.ButtonPlay>
            <Typography
              text={controller.states.hasSound ? 'To hear' : 'No audio for that word'}
              variant="subheading"
              color="primary"
            />
          </Localstyles.ToHear>

          <Typography text="Meanings" variant="heading" color="gray600" />
          <Typography
            text={controller.states.meanings ? controller.states.meanings : 'No meanings'}
            variant="body3"
            color="gray600"
            style={{ marginTop: 8 }}
          />
        </Localstyles.ScrollView>

        <Localstyles.Nav>
          <Localstyles.WrapperNav>
            <Button
              text="Go back"
              variant="outline"
              onPress={() => controller.handles.handleGoBack()}
            />
          </Localstyles.WrapperNav>

          {controller.states.dataNext !== null && (
            <Localstyles.WrapperNav>
              <Button
                text="Next"
                variant="primary"
                onPress={() => controller.handles.handleGoNext()}
              />
            </Localstyles.WrapperNav>
          )}
        </Localstyles.Nav>
      </Localstyles.SafeAreaView>
    </Localstyles.Container>
  )
}
