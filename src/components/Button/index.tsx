import { AnchorHTMLAttributes } from 'react'

import { PrimaryButton } from './styles'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>

export function Button(props: ButtonProps) {
  return <PrimaryButton {...props} />
}
