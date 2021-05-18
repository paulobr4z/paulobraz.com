import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    height: -webkit-fill-available;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }

  body, input, button {
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;