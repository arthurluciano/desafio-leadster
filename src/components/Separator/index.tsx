import { SeparatorLine } from './styles'

export interface SeparatorProps {
  height?: string
  width?: string
}

export function Separator(props: SeparatorProps) {
  return <SeparatorLine {...props} />
}
