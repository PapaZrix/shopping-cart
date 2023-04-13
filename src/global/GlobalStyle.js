// import styledComponents from "styled-components";
import * as styled from 'styled-components'

const GlobalStyle = styled.createGlobalStyle `
    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    html {
        font-size: 62.5%;
        line-height: 1.6;
        position: relative;
        min-height: 100%;
    }
    
    body {
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        margin-bottom: 5.5rem;
    }
    
    h1, h2, h3,
    h4, h5, h6 {
        line-height: 1.2;
    }

    a {
        text-decoration: none;
    }

    img {
        display: block;
        width: 100;
    }

    button, a {
        font-family: inherit;
    }
`

export default GlobalStyle