import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: background 0.5s;
    }

    body{
        background: ${props => props.theme.colors.background};
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme.colors.text};
        transition: all 0.3s;
    }
`