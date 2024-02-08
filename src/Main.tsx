import { useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { getTheme } from '@Shared/styles/themes'
import { Routes } from './routes'

export default function Main(): React.JSX.Element {
  const colorScheme = useColorScheme()
  const theme = getTheme(colorScheme)

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}
