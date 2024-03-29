import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@Domain/pages/Logged/Home/screen'

import { Signin } from '@Domain/pages/LoggedOut/Signin/screen'

import { Splash } from '@Domain/pages/Splash/screen'
import { routeName } from './routeName'
import { DetailWord } from '@Domain/pages/Logged/DetailWord/screen'

const Stack = createNativeStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routeName.Splash}>
        <Stack.Screen name={routeName.Home} component={Home} options={{ headerShown: false }} />
        <Stack.Screen
          name={routeName.Detail}
          component={DetailWord}
          options={{ title: 'Detail' }}
        />
        <Stack.Screen name={routeName.Signin} component={Signin} options={{ headerShown: false }} />
        <Stack.Screen name={routeName.Splash} component={Splash} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
