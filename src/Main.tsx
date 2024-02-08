import { useColorScheme } from 'react-native'

import { Splash } from '@Domain/pages/Splash/screen'
import { getTheme } from '@Shared/styles/themes'
import { ThemeProvider } from 'styled-components/native'

export default function Main(): React.JSX.Element {
  const colorScheme = useColorScheme()
  const theme = getTheme(colorScheme)

  return (
    <ThemeProvider theme={theme}>
      <Splash />
    </ThemeProvider>
  )
}
