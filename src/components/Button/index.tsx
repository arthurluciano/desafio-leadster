import { ComponentProps } from 'react'

import { PrimaryButton } from './styles'

type ButtonProps = ComponentProps<typeof PrimaryButton>

export function Button(props: ButtonProps) {
  return <PrimaryButton {...props} />
}
