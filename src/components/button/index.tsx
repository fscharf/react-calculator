import React, { FC, memo } from 'react'
import { Wrapper } from './styles'

type Props = React.PropsWithChildren & {
  onClick?: () => void
  active?: boolean
}

const Button: FC<Props> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

export default memo(Button)
