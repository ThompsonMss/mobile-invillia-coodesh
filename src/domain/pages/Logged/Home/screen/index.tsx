import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import { RootState } from '@Store/reducers'

export function Home() {
  const teste = useSelector((state: RootState) => state.auth.uid)

  return (
    <View>
      <Text>UID: {teste}</Text>
    </View>
  )
}
