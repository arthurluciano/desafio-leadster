import styled from 'styled-components'

export const PrimaryButton = styled.a`
  height: 3.5rem;
  width: 14rem;

  font-size: 0.875rem;
  font-weight: 600;

  background: ${props => props.theme.colors.brand500};
  color: ${props => props.theme.colors.white};

  border: 1px solid transparent;

  border-radius: 1.8rem;

  transition: 0.1s all ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  user-select: none;

  &:hover {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.brand500};

    border: 1px solid ${props => props.theme.colors.brand500};
  }
`
