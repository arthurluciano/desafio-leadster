import Image from 'next/image'

import styled, { keyframes } from 'styled-components'

export const WhyLeadsterContainer = styled.section`
  width: 100%;

  height: 34rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme.colors.brand050};

  position: relative;

  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 54rem;
  }
`

const float = keyframes`
  0% { transform: translateY(0px) }
  25% { transform: translateY(-6px) }
  50% { transform: translateY(0px) }
  75% { transform: translateY(6px) }
  100% { transform: translateY(0px) }   
`

export const WhyLeadsterChart = styled(Image)`
  animation: ${float} 3s linear infinite;

  z-index: 2;
`

export const WhyLeadsterContent = styled.div`
  height: 100%;

  width: 100%;

  max-width: 72rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  column-gap: 4rem;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;

    max-width: 24rem;

    > ${WhyLeadsterChart} {
      width: 380px;
      height: 353px;
    }
  }
`

export const WhyLeadsterBackgroundSquare = styled.div`
  height: 50rem;
  width: 50rem;

  background: ${props => props.theme.colors.brand100};

  position: absolute;

  bottom: -80%;
  left: -2rem;

  z-index: 1;

  transform: rotate(45deg);

  border-radius: 10%;

  @media screen and (max-width: 768px) {
    bottom: -40%;
    left: -80%;
  }
`

export const WhyLeadsterInfo = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 1rem;

  z-index: 2;
`

export const WhyLeadsterTextsContainer = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 0.5rem;

  flex: 1;

  max-width: 28rem;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const WhyLeadsterMultipleLeads = styled.h1`
  font-size: 2.25rem;
  font-weight: 500;

  color: ${props => props.theme.colors.zinc500};

  > strong {
    font-weight: 700;
  }
`

export const WhyLeadsterFastActivation = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;

  color: ${props => props.theme.colors.zinc500};

  > strong {
    font-weight: 700;
  }
`

export const WhyLeadsterButtons = styled.div`
  display: flex;
  align-items: center;

  column-gap: 1rem;
`

export const WhyLeadsterReferredButtonsGroup = styled.div`
  display: flex;
  align-items: center;

  column-gap: 1rem;

  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    gap: 0.5rem;
  }
`

export const WhyLeadsterReferredButtonsTextsContainer = styled.div`
  color: ${props => props.theme.colors.zinc500};

  display: flex;
  align-items: center;

  column-gap: 0.25rem;
`

export const WhyLeadsterReferredButtonsText = styled.span`
  font-size: 0.75rem;
  font-weight: 600;

  > strong {
    font-weight: 700;
  }
`

export const WhyLeadsterReferredButtonsSeparator = styled.div`
  height: 1rem;
  width: 0.025rem;

  background: ${props => props.theme.colors.zinc500};

  @media screen and (max-width: 768px) {
    transform: rotate(180deg);

    height: 0.005rem;
    width: 5rem;
  }
`
