import { EyedropperIcon } from 'components'
import { FC, memo, useEffect, useState } from 'react'
import { Input, InputWrapper, SwitchButton, Wrapper } from './styles'

type Props = {
  themes: string[]
  currentTheme: string
  onClick: (value: string) => void
}

const ColorSwitch: FC<Props> = ({ themes, currentTheme, onClick }) => {
  const [color, setColor] = useState<string>('')

  useEffect(() => {
    if (color) onClick(color)
  }, [color, onClick])

  return (
    <Wrapper>
      {themes &&
        themes.map(theme => {
          return (
            <SwitchButton
              key={theme}
              active={currentTheme === theme}
              bg={theme}
              onClick={() => onClick(theme)}
            />
          )
        })}

      <InputWrapper>
        <Input
          value={color || currentTheme}
          as="input"
          type="color"
          onChange={event => setColor(event.target.value)}
        />
        <EyedropperIcon />
      </InputWrapper>
    </Wrapper>
  )
}

export default memo(ColorSwitch)
