import * as RadixDialog from '@radix-ui/react-dialog'
import styled, { keyframes } from 'styled-components'

const overlayShow = keyframes`
  0% { 
    opacity: 0
  };
  100% { 
    opacity: 1
  };
`

const contentShow = keyframes`
  0% { opacity: 0; transform: translate(-50%, -48%) scale(.96) };
  100% { opacity: 1; transform: translate(-50%, -50%) scale(1) };
`

export const MediaVideoDialogOverlay = styled(RadixDialog.Overlay)`
  background-color: ${props => props.theme.colors.black + '4C'};
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  z-index: 9998;
`

export const MediaVideoDialogContent = styled(RadixDialog.Content)`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 36rem;
  max-height: 85vh;
  padding: 25;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;

  z-index: 9999;

  &:focus {
    outline: none;
  }
`

export const MediaVideoDialogContentLine = styled.div`
  background: ${props => props.theme.colors.brand500};

  height: 0.225rem;
  width: 100%;
`

export const MediaVideoDialogContentHeader = styled.div`
  width: 100%;
  padding: 1rem 5rem;
  height: 7rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  font-weight: 600;

  color: ${props => props.theme.colors.zinc500};

  position: relative;
`

export const MediaVideoDialogClose = styled(RadixDialog.Close)`
  border: none;
  background: transparent;

  height: 1.5rem;
  width: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.colors.zinc500};

  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
`

export const MediaVideoDialogContentHeaderTitlePrefix = styled.strong`
  color: ${props => props.theme.colors.brand500};
`

export const MediaVideoDialogContentHeaderTitle = styled.strong`
  color: ${props => props.theme.colors.zinc500};

  text-align: center;
`

export const MediaVideoDialogContentYoutube = styled.iframe`
  height: 24rem;

  width: 100%;

  border: none;

  @media screen and (max-width: 768px) {
    height: 14rem;
  }
`

export const MediaVideoDialogContentFooter = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 1rem;

  padding: 1.5rem;

  @media screen and (max-width: 768px) {
    overflow-y: auto;
  }
`

export const MediaVideoDialogContentModuleContainer = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 0.5rem;
`

export const MediaVideoDialogModuleTitle = styled.strong`
  font-size: 0.875rem;
  font-weight: 700;

  color: ${props => props.theme.colors.zinc500};
`

export const MediaVideoDialogModuleContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 1rem;
`

export const MediaVideoDialogModuleContentText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;

  color: ${props => props.theme.colors.zinc500};
`
