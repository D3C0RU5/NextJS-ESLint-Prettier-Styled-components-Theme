import type { AppProps /*, AppContext */ } from 'next/app'
//import usePersistedState from '../utils/usePersistedState'
//https://github.com/rocketseat-content/youtube-code-drop-theme-switcher/blob/master/src/utils/usePersistedState.ts
//import { setCookie } from 'nookies'

import React, { useState } from 'react'
import { light } from '../styles/themes/light'
import { dark } from '../styles/themes/dark'

import GlobalStyle from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import Header from './Header'

export default function App({ Component, pageProps }: AppProps) {

    const [theme, setTheme] = useState(light);
    //const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);


    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light)
    }


    return (
        <ThemeProvider theme={theme}>
            <Header toggleTheme={toggleTheme} />
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}