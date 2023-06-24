import { ExclusiveBadge } from '@/components/ExclusiveBadge'
import { Separator } from '@/components/Separator'

import {
  HeroContainer,
  HeroContent,
  HeroContentChangeGameContainer,
  HeroContentHighlighted,
  HeroContentHighlightedText,
  HeroContentTexts,
  HeroContentTitle
} from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <ExclusiveBadge />

        <HeroContentTexts>
          <HeroContentTitle>Menos Conversinha,</HeroContentTitle>
          <HeroContentHighlighted>
            <HeroContentHighlightedText>Mais Conversão</HeroContentHighlightedText>
          </HeroContentHighlighted>
        </HeroContentTexts>

        <Separator width="calc(100% + 4rem)" />

        <HeroContentChangeGameContainer>
          Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio
        </HeroContentChangeGameContainer>
      </HeroContent>
    </HeroContainer>
  )
}
