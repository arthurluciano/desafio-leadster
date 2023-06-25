// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      brand050: string
      brand200: string
      brand300: string
      brand400: string
      brand500: string

      green300: string
      green400: string
      green500: string
      green600: string

      yellow300: string
      yellow400: string
      yellow500: string
      yellow600: string

      zinc600: string
      zinc500: string
      zinc100: string
      zinc50: string

      gray300: string
      gray400: string
      gray500: string

      white: string
      black: string

      background: string

      'blue-gradient': {
        from: string
        to: string
      }
    }
  }
}
