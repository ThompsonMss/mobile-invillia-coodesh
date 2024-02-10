import { useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { Provider } from 'react-redux'

import { getTheme } from '@Shared/styles/themes'
import { Routes } from '@Routes/index'
import { store } from '@Store/index'

export default function Main(): React.JSX.Element {
  const colorScheme = useColorScheme()
  const theme = getTheme(colorScheme)

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  )
}
