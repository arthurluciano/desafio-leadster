import styled from 'styled-components'

export const MediaContainer = styled.section`
  width: 100%;

  background: ${props => props.theme.colors.white};
`

export const MediaContent = styled.div`
  width: 100%;

  max-width: 64rem;

  margin: 6rem auto;

  @media screen and (max-width: 768px) {
    max-width: 30rem;
  }

  @media screen and (max-width: 512px) {
    max-width: 24rem;
  }
`
