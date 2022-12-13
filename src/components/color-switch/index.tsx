import { EyedropperIcon } from 'components'
import { FC, memo, useEffect, useState } from 'react'
import { Input, InputWrapper, SwitchButton, Wrapper } from './styles'

type Props = {
  themes: string[]
  currentTheme: string
  onSelectTheme: (value: string) => void
}

const ColorSwitch: FC<Props> = ({ themes, currentTheme, onSelectTheme }) => {
  const [color, setColor] = useState<string>('')

  useEffect(() => {
    if (color) onSelectTheme(color)
  }, [color, onSelectTheme])

  return (
    <Wrapper>
      {themes &&
        themes.map(theme => {
          return (
            <SwitchButton
              key={theme}
              active={currentTheme === theme}
              bg={theme}
              onClick={() => onSelectTheme(theme)}
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
