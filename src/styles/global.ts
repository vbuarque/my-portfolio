import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: background 0.5s;
    }

    body{
        background: ${props => props.theme.colors.background};
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme.colors.text};
        transition: all 0.3s;
    }
`