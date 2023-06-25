import styled from 'styled-components'

interface Props {
  variant: {
    background: string
    color: string
    iconBackground: string
  }
}

export const MediaVideoDownloadIconContainer = styled.div`
  height: 1.875rem;
  min-width: 1.875rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MediaVideoDownloadButtonLabelContainer = styled.div`
  height: 100%;
  width: 100%;

  padding: 0 0.5rem;

  display: flex;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const MediaVideoDownloadButton = styled.button<Props>`
  background: ${props => props.variant.background};

  height: 1.875rem;
  min-width: 5rem;

  color: ${props => props.variant.color};

  font-size: 0.75rem;
  font-weight: 600;

  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;

  user-select: none;

  > ${MediaVideoDownloadIconContainer} {
    background: ${props => props.variant.iconBackground};
    color: ${props => props.variant.color};
  }
`
