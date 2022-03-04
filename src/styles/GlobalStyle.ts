import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    font-size: 14px;
    color: ${({ theme }) => theme.foreground};
    border-radius: 20px;
    overflow: hidden;
    background: #191622;
    background-image:  
      radial-gradient(at 17% 25%, hsla(262,12%,25%,1) 0, transparent 57%),  
      radial-gradient(at 60% 52%, hsla(257,23%,16%,1) 0, transparent 51%),  
      radial-gradient(at 50% 8%, hsla(360,0%,0%,1) 0, transparent 49%),  
      radial-gradient(at 87% 10%, hsla(360,10%,5%,1) 0, transparent 50%),  
      radial-gradient(at 12% 73%, hsla(267,82%,7%,1) 0, transparent 41%);
  }

  a {
    color: ${({ theme }) => theme.cyan};
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    width: fit-content;

    &:after {
      content: "";
      height: 1px;
      width: 0;
      background-color: ${({ theme }) => theme.cyan};
      transition: all cubic-bezier(.0,2.1,0.75,0.35) .4s;
    }

    &:hover:after {
      width: 100%;
    }
  }
`
