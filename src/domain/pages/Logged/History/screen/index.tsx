import { ItemWordHistoryModel } from '@Domain/models/ItemWordHistoryModel'
import { useController } from '../controller/useController'
import * as LocalStyles from './styles'
import { Typography } from '@Shared/components/ui'

import { format, parseISO } from 'date-fns'

export const NUM_COLUMNS_LIST_WORDS = 3

export function History() {
  const controller = useController()

  function renderItem(item: ItemWordHistoryModel) {
    return (
      <LocalStyles.Card
        key={item.id}
        onPress={() => {
          controller.handles.handleGoDetail(item)
        }}
      >
        <LocalStyles.WrapperCard>
          <LocalStyles.SectionCard>
            <Typography text="Word:" variant="body4" color="gray300" />
            <Typography text={item.word} variant="body3" color="gray400" />
          </LocalStyles.SectionCard>

          <LocalStyles.SectionCard>
            <Typography text="Date:" variant="body4" color="gray300" />
            <Typography
              text={format(parseISO(item.createdAt), 'yyyy-MM-dd HH:mm')}
              variant="body3"
              color="gray400"
            />
          </LocalStyles.SectionCard>
        </LocalStyles.WrapperCard>

        <LocalStyles.IconArrow name="keyboard-arrow-right" />
      </LocalStyles.Card>
    )
  }

  return (
    <LocalStyles.Container>
      <Typography text="Word history" variant="subheading" />

      <LocalStyles.ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
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
      </LocalStyles.ScrollView>
    </LocalStyles.Container>
  )
}
