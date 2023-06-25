import styled from 'styled-components'

import { SeparatorProps } from '.'

export const SeparatorLine = styled.div<SeparatorProps>`
  height: ${props => props.height || '0.063rem'};
  width: ${props => props.width || '100%'};

  background: ${props => props.theme.colors.zinc100};
`
