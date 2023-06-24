import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: 'Plus Jakarta Sans';
  }

  body {
    background: ${theme.colors.background};
  }

  ::selection {
      color: ${theme.colors.white};
      background: ${theme.colors.green500}
  }

  input, textarea, select {
    font-size: '1rem'
  }

  button {
    cursor: pointer;

    border: none;
    outline: none;
  }
`
