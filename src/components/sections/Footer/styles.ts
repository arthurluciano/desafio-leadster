import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const FooterContentInfo = styled.div`
  width: 100%;

  max-width: 72rem;

  margin: 3rem auto;

  display: flex;
  flex-direction: column;

  row-gap: 2rem;
`

export const FooterBrandContainer = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;

  row-gap: 1rem;
`

export const FooterBrandText = styled.span`
  font-size: 0.875rem;
  font-weight: 600;

  color: ${props => props.theme.colors.zinc500};
`

export const FooterLinksMenu = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const FooterLinksMenuGroup = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 1.5rem;
`

export const FooterLinksMenuGroupTitle = styled.strong`
  font-size: 1rem;
  font-weight: 600;
`

export const FooterLinksMenuGroupList = styled.ul`
  display: flex;
  flex-direction: column;

  row-gap: 0.5rem;

  list-style: none;
`

export const FooterLinksMenuGroupListItem = styled.li`
  > a {
    font-size: 0.875rem;
    font-weight: 500;

    cursor: pointer;
    text-decoration: none;

    color: ${props => props.theme.colors.gray500};
    background: transparent;

    position: relative;

    &:hover {
      color: ${props => props.theme.colors['blue-gradient'].from};
    }

    &::before {
      content: '';

      position: absolute;

      left: 0;
      bottom: -0.25rem;

      height: 0.225rem;
      width: 0;

      border-radius: 0.25rem;

      transition: 0.1s all ease-in-out;

      background: linear-gradient(
        45deg,
        ${props => props.theme.colors['blue-gradient'].from},
        ${props => props.theme.colors['blue-gradient'].to}
      );
    }

    &:hover::before {
      width: 1.5rem;
    }
  }
`

export const FooterLinksMenuGroupListItemSmallText = styled.span`
  font-size: 0.75rem;
  font-weight: 600;

  color: ${props => props.theme.colors.gray500};

  strong {
    color: ${props => props.theme.colors.zinc600};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.gray500};
  }
`

export const FooterLinksMenuSocialMediaList = styled.div`
  display: flex;
  align-items: center;

  column-gap: 1rem;
`

export const FooterLinksMenuSocialMedia = styled.button`
  background: ${props => props.theme.colors.zinc100};

  color: ${props => props.theme.colors.zinc500};

  height: 2rem;
  width: 2rem;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.1s all ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

export const FooterEssentialInfo = styled.div`
  width: 100%;

  max-width: 72rem;

  height: 4rem;

  margin: 0 auto;
`

export const FooterEssentialInfoCopyright = styled.div`
  display: flex;
  align-items: center;
`
