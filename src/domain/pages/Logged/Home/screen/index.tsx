import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { WordList } from '@Domain/pages/Logged/WordList/screen'
import { History } from '@Domain/pages/Logged/History/screen'
import { Favorites } from '@Domain/pages/Logged/Favorites/screen'
import { routeName } from '@Routes/routeName'

import * as LocalStyles from './styles'
import * as LocalComponents from '../components'
import { useController } from '../controller/useController'
import { useTheme } from 'styled-components/native'

const Tab = createMaterialTopTabNavigator()

export function Home() {
  const theme = useTheme()
  useController()

  return (
    <LocalStyles.SafeAreaView>
      <LocalComponents.Header />

      <Tab.Navigator
        screenOptions={{ tabBarIndicatorStyle: { backgroundColor: theme.colors.primary } }}
      >
        <Tab.Screen
          name={routeName.WordList}
          options={{ title: 'Word List' }}
          component={WordList}
        />
        <Tab.Screen name={routeName.History} options={{ title: 'History' }} component={History} />
        <Tab.Screen
          name={routeName.Favorites}
          options={{ title: 'Favorites' }}
          component={Favorites}
        />
      </Tab.Navigator>
    </LocalStyles.SafeAreaView>
  )
}
