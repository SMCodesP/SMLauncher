import { ReactNode, ButtonHTMLAttributes, FC } from 'react'

import { Container } from './styles'

type ButtonProps = {
  children: ReactNode
  backgroundColor?: string
  Icon?: any
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({
  children,
  backgroundColor,
  Icon,
  type = 'button',
  ...props
}) => {
  return (
    <Container backgroundColor={backgroundColor} type={type} {...props}>
      {Icon}
      {children}
    </Container>
  )
}
