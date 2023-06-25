import styled from 'styled-components'

export const HeroContainer = styled.section`
  width: 100%;

  height: 32.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme.colors['brand-lighter']};
`

export const HeroContent = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  row-gap: 1rem;
`

export const HeroContentTexts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  row-gap: 0.25rem;
`

export const HeroContentTitle = styled.strong`
  font-size: 2.2rem;
  font-weight: 500;
`

export const HeroContentHighlighted = styled.div`
  position: relative;

  &:after {
    content: '';

    position: absolute;

    height: 32px;
    width: 49px;

    right: -1.2rem;

    background: url('/asset-header.png');
  }
`

export const HeroContentHighlightedText = styled.strong`
  font-size: 4rem;
  font-weight: 700;

  color: white;
  background: linear-gradient(
    45deg,
    ${props => props.theme.colors['blue-gradient'].from},
    ${props => props.theme.colors['blue-gradient'].to}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const HeroContentChangeGameContainer = styled.div`
  font-size: 0.875rem;
  font-weight: 600;

  color: ${props => props.theme.colors.gray500};

  > strong {
    font-weight: 800;
  }
`
