import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${({ theme }) => theme.appColors.body};    
  }
`

export default GlobalStyle;