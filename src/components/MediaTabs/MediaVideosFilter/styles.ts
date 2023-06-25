import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import styled from 'styled-components'

export const MediaVideosFilterTriggerContainer = styled.div`
  display: flex;
  align-items: center;

  column-gap: 0.5rem;
`

export const MediaVideosFilterLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 700;

  color: ${props => props.theme.colors.gray500};
`

export const MediaVideosFilterPanel = styled.button`
  background: transparent;

  border: 1px solid ${props => props.theme.colors.gray500};
  border-radius: 1rem;

  font-size: 0.875rem;
  font-weight: 600;

  color: ${props => props.theme.colors.gray500};

  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 12rem;

  padding: 0.35rem 0.875rem;

  column-gap: 0.5rem;

  svg {
    transform: rotate(0);

    transition: 0.2s all;
  }

  &[data-state='open'] {
    svg {
      transform: rotate(180deg);
    }
  }
`

export const MediaVideosFilterContent = styled(RadixDropdown.Content)<{ width: number }>`
  width: ${props => props.width};

  background: ${props => props.theme.colors.white};

  min-width: 12rem;

  border: 1px solid ${props => props.theme.colors.gray500};
  border-radius: 1rem;

  overflow: hidden;

  z-index: 9999;
`

export const MediaVideosFilterItem = styled(RadixDropdown.Item)`
  width: 100%;

  padding: 0.35rem 0.875rem;

  font-size: 0.875rem;
  font-weight: 600;

  background: transparent;

  transition: 0.1s all ease-in-out;

  cursor: pointer;

  outline: none;

  &:hover {
    background: ${props => props.theme.colors['brand-lighter']};
  }
`
