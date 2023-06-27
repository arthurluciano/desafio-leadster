import { ExclusiveBadge } from '@/components/ExclusiveBadge'
import { Separator } from '@/components/Separator'
import { theme } from '@/styles/theme'
import { rgbToHex } from '@/utils/rgbToHex.util'
import { render, screen, within } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { beforeAll, describe, expect, it } from 'vitest'

import {
  HeroContainer,
  HeroContent,
  HeroContentChangeGameContainer,
  HeroContentHighlighted,
  HeroContentHighlightedText,
  HeroContentTexts,
  HeroContentTitle
} from './styles'

describe('hero', () => {
  beforeAll(() => {
    render(
      <ThemeProvider theme={theme}>
        <HeroContainer data-testid="hero">
          <HeroContent>
            <ExclusiveBadge />

            <HeroContentTexts>
              <HeroContentTitle>Menos Conversinha,</HeroContentTitle>
              <HeroContentHighlighted>
                <HeroContentHighlightedText data-testid="highlighted">
                  Mais Conversão
                </HeroContentHighlightedText>
              </HeroContentHighlighted>
            </HeroContentTexts>

            <Separator width="calc(100% + 4rem)" />

            <HeroContentChangeGameContainer>
              Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio
            </HeroContentChangeGameContainer>
          </HeroContent>
        </HeroContainer>
      </ThemeProvider>
    )
  })

  it('should be render the header component', () => {
    expect(screen.getByTestId('hero')).toBeDefined()
  })

  it('should be with blue gradient in HeroContentHighlightedText', () => {
    const hero = within(screen.getByTestId('hero'))

    const highlightedText = hero.getByText('Mais Conversão')

    const gradient = rgbToHex(getComputedStyle(highlightedText).color)

    expect(gradient).toBe(theme.colors['blue-gradient'].from)
  })
})
