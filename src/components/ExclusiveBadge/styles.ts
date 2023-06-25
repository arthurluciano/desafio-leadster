import styled from 'styled-components'

export const ExclusiveBadgeContainer = styled.div`
  height: 2rem;
  padding: 0 1rem;

  border: 2px solid ${props => props.theme.colors.brand500};

  border-radius: 1rem;
  border-bottom-left-radius: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ExclusiveBadgeLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 700;

  color: ${props => props.theme.colors.brand500};

  text-transform: uppercase;

  user-select: none;
`
