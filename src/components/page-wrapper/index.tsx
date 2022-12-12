import { ColorSwitch, Wallpaper } from 'components'
import { useStorage } from 'hooks'
import { lighten } from 'polished'
import React, { FC, memo } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme, themes } from 'theme'

type Props = React.PropsWithChildren

const PageWrapper: FC<Props> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useStorage<string>('theme', themes[0])

  return (
    <ThemeProvider
      theme={{
        ...theme,
        primary: currentTheme || theme.primary,
        secondary: lighten(0.2, currentTheme || theme.primary)
      }}
    >
      <GlobalStyles />

      <ColorSwitch
        currentTheme={currentTheme}
        themes={themes}
        onClick={setCurrentTheme}
      />

      <Wallpaper />

      {children}
    </ThemeProvider>
  )
}

export default memo(PageWrapper)
