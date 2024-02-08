import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@Domain/pages/Logged/Home/screen'

import { Login } from '@Domain/pages/LoggedOut/Login/screen'

import { Splash } from '@Domain/pages/Splash/screen'

type RootStackParamList = {
  Home: undefined
  Login: undefined
  Splash: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
