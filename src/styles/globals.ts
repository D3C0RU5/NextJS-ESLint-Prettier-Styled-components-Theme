import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: ${(props) => props.theme.colors.background};
    color:${(props) => props.theme.colors.text};
    font-size:12px;
  }
`

export default GlobalStyle
