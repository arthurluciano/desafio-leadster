import { Play } from '@phosphor-icons/react'
import * as RadixTabs from '@radix-ui/react-tabs'
import styled from 'styled-components'

export const MediaTabsContainer = styled.div`
  display: flex;
  align-items: center;

  column-gap: 1rem;

  width: 100%;
`

export const MediaTabsRoot = styled(RadixTabs.Root)`
  display: flex;
  flex-direction: column;

  row-gap: 2rem;

  width: 100%;
`

export const MediaTabsList = styled(RadixTabs.List)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MediaTabsListAlign = styled.div`
  display: flex;
  align-items: center;

  column-gap: 1rem;
`

export const MediaTabsTrigger = styled(RadixTabs.Trigger)`
  background: transparent;

  border: 1px solid ${props => props.theme.colors.gray500};
  border-radius: 1rem;

  font-size: 0.875rem;
  font-weight: 500;

  color: ${props => props.theme.colors.gray500};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.35rem 0.875rem;

  transition: 0.1s all ease-in-out;

  &:hover {
    border: 1px solid ${props => props.theme.colors['brand-mid']};
    color: ${props => props.theme.colors['brand-mid']};
  }

  &[data-state='active'] {
    background: ${props => props.theme.colors['brand-mid']};
    border: 1px solid ${props => props.theme.colors['brand-mid']};
    color: ${props => props.theme.colors.white};
  }
`

export const MediaTabsContent = styled(RadixTabs.Content)`
  margin: 1rem 0;

  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 1rem;

  &[data-state='inactive'] {
    display: none;
  }
`

export const MediaVideoThumbnailOverlay = styled.div`
  position: absolute;
  background: ${props => props.theme.colors['brand-mid'] + '4D'};

  height: 12.75rem;
  width: 100%;

  z-index: 2;

  opacity: 0;

  transition: 0.1s all ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MediaVideo = styled.div`
  width: 100%;

  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  border-radius: 0.5rem;

  overflow: hidden;

  cursor: pointer;

  &:hover {
    ${MediaVideoThumbnailOverlay} {
      opacity: 1;
    }
  }
`

export const MediaVideoThumbnail = styled.div<{ thumbnail: string }>`
  background: url('${props => props.thumbnail}');

  height: 12.75rem;
  width: 100%;

  position: relative;

  z-index: 1;
`

export const MediaVideoPlay = styled(Play)`
  color: ${props => props.theme.colors.white};

  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
`

export const MediaVideoTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;

  color: ${props => props.theme.colors.gray500};

  padding: 1.5rem 1.5rem;
`
