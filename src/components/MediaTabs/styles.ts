import { Play } from '@phosphor-icons/react'
import * as RadixTabs from '@radix-ui/react-tabs'
import styled, { css } from 'styled-components'

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

  @media screen and (max-width: 1280px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const MediaTabsListAlign = styled.div`
  display: flex;
  align-items: center;

  max-width: 24rem;

  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  column-gap: 1rem;
`

export const MediaTabsTrigger = styled(RadixTabs.Trigger)`
  background: transparent;

  border: 1px solid ${props => props.theme.colors.zinc500};
  border-radius: 1rem;

  font-size: 0.875rem;
  font-weight: 500;

  color: ${props => props.theme.colors.zinc500};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.35rem 0.875rem;

  user-select: none;

  transition: 0.1s all ease-in-out;

  &:hover {
    border: 1px solid ${props => props.theme.colors.brand500};
    color: ${props => props.theme.colors.brand500};
  }

  &[data-state='active'] {
    background: ${props => props.theme.colors.brand500};
    border: 1px solid ${props => props.theme.colors.brand500};
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

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const MediaTabsContentNotFound = styled.div`
  height: 12rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MediaTabsContentNotFoundMessage = styled.strong`
  font-size: 1.5rem;
  font-weight: 600;

  color: ${props => props.theme.colors.zinc500};

  text-align: center;

  max-width: 24rem;
`

export const MediaVideoThumbnailOverlay = styled.div`
  position: absolute;
  background: ${props => props.theme.colors.brand500 + '4D'};

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
  background-size: cover;

  height: 12.75rem;
  width: 100%;

  position: relative;
`

export const MediaVideoPlay = styled(Play)`
  color: ${props => props.theme.colors.white};

  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
`

export const MediaVideoTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;

  color: ${props => props.theme.colors.zinc500};

  padding: 1.5rem 1.5rem;
`

export const MediaTabsPagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 1rem;
`

export const MediaTabsPageText = styled.strong`
  font-size: 1rem;
  font-weight: 600;

  color: ${props => props.theme.colors.zinc500};
`

export const MediaTabsPage = styled.button<{ selected?: boolean }>`
  font-size: 1rem;
  font-weight: 600;

  color: ${props => props.theme.colors.zinc500};

  border: 1px solid transparent;

  height: 2rem;
  min-width: 2rem;

  background: transparent;

  border-radius: 0.25rem;

  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.1s all ease-in-out;

  &:hover {
    background: ${props => props.theme.colors.brand050};
    color: ${props => props.theme.colors.brand500};
  }

  ${props =>
    props.selected &&
    css`
      color: ${props => props.theme.colors.brand500};
      border: 1px solid ${props => props.theme.colors.brand500};
    `}
`
