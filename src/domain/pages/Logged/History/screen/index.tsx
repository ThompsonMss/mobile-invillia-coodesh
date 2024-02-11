import { ItemWordModel } from '@Domain/models/ItemWordModel'
import { CardWord } from '../../Home/components/CardWord'
import { useController } from '../controller/useController'
import * as LocalStyles from './styles'
import { Typography } from '@Shared/components/ui'

export const NUM_COLUMNS_LIST_WORDS = 3

export function History() {
  const controller = useController()

  function renderItem(item: ItemWordModel) {
    return <CardWord key={item.id} item={item} />
  }

  return (
    <LocalStyles.Container>
      <Typography text="Word history" variant="subheading" />

      <LocalStyles.ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        <LocalStyles.ContentWords>
          {controller.states.data.map((item) => renderItem(item))}

          {controller.states.loading ? (
            <LocalStyles.ContainerInfoList>
              <Typography text="Carregando" variant="body4" color={'primary'} />
              <LocalStyles.LoadList />
            </LocalStyles.ContainerInfoList>
          ) : (
            <>
              {controller.states.data.length === 0 && (
                <LocalStyles.ContainerInfoList>
                  <Typography
                    text="No history available yet..."
                    variant="body4"
                    color={'primary'}
                    style={{ textAlign: 'center' }}
                  />
                </LocalStyles.ContainerInfoList>
              )}
            </>
          )}
        </LocalStyles.ContentWords>
      </LocalStyles.ScrollView>
    </LocalStyles.Container>
  )
}
