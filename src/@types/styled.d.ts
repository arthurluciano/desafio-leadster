// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      'brand-lighter': string
      'brand-light': string
      'brand-mid': string

      green500: string

      gray600: string
      gray500: string
      gray100: string
      gray50: string

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
