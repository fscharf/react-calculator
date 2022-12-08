import { createGlobalStyle } from 'styled-components'
// import Bg from 'assets/images/calculator-bg.svg'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    word-wrap: break-word;
    font-family: 'Inter', 'Segoe UI', sans-serif;
    font-size: 8px;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 8px;
      &-track {
        background: transparent;
      }
      &-thumb {
        border-radius: 4px;
        background: #aeaeae;
        &:hover {
          background: #f9f9f9;
        }
      }
    }
  }
  
  body {
    background: url('./wallpaper.svg');
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`
