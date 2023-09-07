import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme['gray-800']};
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme['font-normal']};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  button {
    cursor: pointer;
  }

  button:not(:disabled):active { 
    transform: translateY(1px);
  }

  @media (max-width:  912px) {
   html {
      font-size: 87.5%;      
    }
  }

  @media (max-width:  425px) {
   html {
      font-size: 100%;      
    }
  }
`
