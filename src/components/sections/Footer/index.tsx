import Image from 'next/image'

import { Separator } from '@/components/Separator'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

import {
  FooterBrandContainer,
  FooterBrandText,
  FooterContainer,
  FooterContent,
  FooterContentInfo,
  FooterEssentialInfo,
  FooterLinksMenu,
  FooterLinksMenuGroup,
  FooterLinksMenuGroupList,
  FooterLinksMenuGroupListItem,
  FooterLinksMenuGroupListItemSmallText,
  FooterLinksMenuGroupTitle,
  FooterLinksMenuSocialMedia,
  FooterLinksMenuSocialMediaList
} from './styles'

const LINKS_MENU = [
  {
    label: 'Links principais',
    name: 'mainlyLinks',
    items: [
      {
        href: '#',
        name: 'Home'
      },
      {
        href: '#',
        name: 'Ferramenta'
      },
      {
        href: '#',
        name: 'Preços'
      },
      {
        href: '#',
        name: 'Contato'
      }
    ]
  },
  {
    label: 'Cases',
    name: 'cases',
    items: [
      {
        href: '#',
        name: 'Geração de Leads B2B'
      },
      {
        href: '#',
        name: 'Geração de Leads em Software'
      },
      {
        href: '#',
        name: 'Geração de Leads em Imobiliária'
      },
      {
        href: '#',
        name: 'Cases de Sucesso'
      }
    ]
  },
  {
    label: 'Materiais',
    name: 'materials',
    items: [
      {
        href: '#',
        name: 'Blog'
      },
      {
        href: '#',
        name: 'Parceria com Agências'
      },
      {
        href: '#',
        name: 'Guia Definitivo do Marketing'
      },
      {
        href: '#',
        name: 'Materiais Gratuitos'
      }
    ]
  }
]

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterContentInfo>
          <FooterBrandContainer>
            <Image src="/animated_logo.gif" alt="Logo leadster animada" height={62} width={270} />
            <FooterBrandText>Transformando visitantes em clientes.</FooterBrandText>
          </FooterBrandContainer>

          <FooterLinksMenu>
            {LINKS_MENU.map((menu, index) => (
              <FooterLinksMenuGroup key={`${menu.name}-${index}`}>
                <FooterLinksMenuGroupTitle>{menu.label}</FooterLinksMenuGroupTitle>

                <FooterLinksMenuGroupList>
                  {menu.items.map((item, index) => (
                    <FooterLinksMenuGroupListItem
                      key={`${menu.name}-${item.name.toLowerCase().trim()}-${index}`}
                    >
                      <a href={item.href}>{item.name}</a>
                    </FooterLinksMenuGroupListItem>
                  ))}
                </FooterLinksMenuGroupList>
              </FooterLinksMenuGroup>
            ))}

            <FooterLinksMenuGroup>
              <FooterLinksMenuGroupTitle>Siga a Leadster</FooterLinksMenuGroupTitle>

              <FooterLinksMenuGroupList>
                <FooterLinksMenuGroupListItem>
                  <FooterLinksMenuSocialMediaList>
                    <FooterLinksMenuSocialMedia type="button">
                      <LinkedinLogo size={18} weight="bold" />
                    </FooterLinksMenuSocialMedia>
                    <FooterLinksMenuSocialMedia type="button">
                      <FacebookLogo size={18} weight="bold" />
                    </FooterLinksMenuSocialMedia>
                    <FooterLinksMenuSocialMedia type="button">
                      <InstagramLogo size={18} weight="bold" />
                    </FooterLinksMenuSocialMedia>
                  </FooterLinksMenuSocialMediaList>
                </FooterLinksMenuGroupListItem>
                <FooterLinksMenuGroupListItem>
                  <FooterLinksMenuGroupListItemSmallText>
                    <a href="mailto:contato@leadster.com.br">
                      <strong>E-mail:</strong> contato@leadster.com.br
                    </a>
                  </FooterLinksMenuGroupListItemSmallText>
                </FooterLinksMenuGroupListItem>
                <FooterLinksMenuGroupListItem>
                  <FooterLinksMenuGroupListItemSmallText>
                    <strong>Telefone:</strong> (42) 98828-9851
                  </FooterLinksMenuGroupListItemSmallText>
                </FooterLinksMenuGroupListItem>
              </FooterLinksMenuGroupList>
            </FooterLinksMenuGroup>
          </FooterLinksMenu>
        </FooterContentInfo>

        <Separator />

        <FooterEssentialInfo>dd</FooterEssentialInfo>
      </FooterContent>
    </FooterContainer>
  )
}
