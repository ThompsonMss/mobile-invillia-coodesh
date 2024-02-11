import { ItemWordModel } from '@Domain/models/ItemWordModel'
import { CardWord } from '../../Home/components/CardWord'
import { useController } from '../controller/useController'
import * as LocalStyles from './styles'
import { Typography } from '@Shared/components/ui'

export const NUM_COLUMNS_LIST_WORDS = 3

export function WordList() {
  const controller = useController()

  const handleScroll = (event: any) => {
    const { y } = event.nativeEvent.contentOffset
    const { height } = event.nativeEvent.layoutMeasurement
    const { height: contentHeight } = event.nativeEvent.contentSize

    const scrollPosition = y + height
    const scrollPercentage = (scrollPosition / contentHeight) * 100

    if (scrollPercentage >= 80) {
      controller.handles.exec(controller.states.lastKey, controller.states.loading)
    }
  }

  function renderItem(item: ItemWordModel) {
    return <CardWord key={item.id} item={item} />
  }

  return (
    <LocalStyles.Container>
      <Typography text="Word List" variant="subheading" />

      <LocalStyles.ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={32}
        showsVerticalScrollIndicator={false}
      >
        <LocalStyles.ContentWords>
          {controller.states.data.map((item) => renderItem(item))}
          <LocalStyles.ContainerLoadList>
            <Typography text="Carregando" variant="body4" color={'primary'} />
            <LocalStyles.LoadList />
          </LocalStyles.ContainerLoadList>
        </LocalStyles.ContentWords>
      </LocalStyles.ScrollView>
    </LocalStyles.Container>
  )
}
