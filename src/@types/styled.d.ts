import { InterfaceTheme } from '@Shared/styles/themes/InterfaceTheme'
import 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme extends InterfaceTheme {}
}
