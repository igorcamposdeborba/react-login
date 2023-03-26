import { createGlobalStyle } from "styled-components"; // estilos css

const GlobalStyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100 vw;
    height: 100 vh;
    background-color: #f0f2f5;
    font-family: Arial, Helvetica, sans-serif;
}
`;

export default GlobalStyle;