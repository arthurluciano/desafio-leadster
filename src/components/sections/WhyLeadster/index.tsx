import Image from 'next/image'

import { Button } from '@/components/Button'
import { Separator } from '@/components/Separator'

import {
  WhyLeadsterBackgroundSquare,
  WhyLeadsterButtons,
  WhyLeadsterChart,
  WhyLeadsterContainer,
  WhyLeadsterContent,
  WhyLeadsterFastActivation,
  WhyLeadsterInfo,
  WhyLeadsterMultipleLeads,
  WhyLeadsterReferredButtonsGroup,
  WhyLeadsterReferredButtonsSeparator,
  WhyLeadsterReferredButtonsText,
  WhyLeadsterReferredButtonsTextsContainer,
  WhyLeadsterTextsContainer
} from './styles'

export function WhyLeadster() {
  return (
    <WhyLeadsterContainer>
      <WhyLeadsterContent>
        <WhyLeadsterBackgroundSquare />

        <WhyLeadsterChart
          src="/comparativo_img_CTA.png"
          alt="Porque usar a Leadster"
          width={502.6}
          height={458}
        />

        <WhyLeadsterInfo>
          <WhyLeadsterTextsContainer>
            <WhyLeadsterMultipleLeads>
              Pronto para triplicar sua <strong>Geração de Leads?</strong>
            </WhyLeadsterMultipleLeads>
            <WhyLeadsterFastActivation>
              Criação e ativação <strong>em 4 minutos.</strong>
            </WhyLeadsterFastActivation>
          </WhyLeadsterTextsContainer>

          <Separator height="0.126rem" />

          <WhyLeadsterButtons>
            <Button as="a">VER DEMONSTRAÇÃO</Button>
            <Image src="/selo_RD.png" alt="Selo RD" height={56} width={157} />
          </WhyLeadsterButtons>

          <WhyLeadsterReferredButtonsGroup>
            <WhyLeadsterReferredButtonsTextsContainer>
              <Image
                src="/no-card-dark.webp"
                alt="Cartão de crédito não é necessário"
                height={14}
                width={14}
              />
              <WhyLeadsterReferredButtonsText>
                <strong>Não</strong> é necessário Cartão de Crédito
              </WhyLeadsterReferredButtonsText>
            </WhyLeadsterReferredButtonsTextsContainer>

            <WhyLeadsterReferredButtonsSeparator />

            <WhyLeadsterReferredButtonsTextsContainer>
              <Image src="/rating.webp" alt="Nota de satisfação 4.9/5" height={14} width={84} />
              <WhyLeadsterReferredButtonsText>
                <strong>4.9</strong>/5 média de satisfação
              </WhyLeadsterReferredButtonsText>
            </WhyLeadsterReferredButtonsTextsContainer>
          </WhyLeadsterReferredButtonsGroup>
        </WhyLeadsterInfo>
      </WhyLeadsterContent>
    </WhyLeadsterContainer>
  )
}
