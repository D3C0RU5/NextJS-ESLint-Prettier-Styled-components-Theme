import { ThemeProvider } from 'styled-components'
import { ReactNode, useState } from 'react'

import { setCookie } from 'nookies'
import { dark } from '../../styles/themes/dark'
import { light } from '../../styles/themes/light'
import Header from '../Header'
import GlobalStyle from '../../styles/globals'

interface Props {
  theme: string
  children: ReactNode
}
interface MasterProps {
  theme: string
}

const Master: React.FC<MasterProps> = (props: Props) => {
  const [theme, setTheme] = useState(() =>
    props.theme === 'light' ? dark : light
  )

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
    setCookie(null, 'theme', theme.title, {
      maxAge: 86400 * 7,
      path: '/',
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  )
}

export default Master
