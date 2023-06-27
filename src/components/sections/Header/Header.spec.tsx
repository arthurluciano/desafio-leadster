import { Logo } from '@/components/Logo'
import { theme } from '@/styles/theme'
import { render, screen, within } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { beforeAll, describe, expect, it } from 'vitest'

import { HeaderContainer } from './styles'

describe('header', () => {
  beforeAll(() => {
    render(
      <ThemeProvider theme={theme}>
        <HeaderContainer data-testid="header">
          <Logo />
        </HeaderContainer>
      </ThemeProvider>
    )
  })

  it('should be render the header component', () => {
    expect(screen.getByTestId('header')).toBeDefined()
  })

  it('should be render brand logo svg inside header', () => {
    const header = within(screen.getByTestId('header'))

    expect(header.getByRole('brand-logo')).toBeDefined()
  })
})
