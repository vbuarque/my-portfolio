import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
`
export const MainContent = styled.main`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
`

export const LeftContent = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
        text-decoration: none;
    }
`
export const SpanTitle = styled.span`
    display: flex;
    align-items: center;

    font-size: 32px;
    font-weight: 300;

    b{
        margin: 0 10px 0 10px;
    }
`

export const SpanSubtitle = styled.span`
    font-size: 18px;
    margin: 13px 0 80px 0;
`

export const RightContent = styled.aside`
    
`

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: fixed;
    bottom: 0;
`

export const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
    font-size: 42px;
    color: ${props => props.theme.colors.button};
    transition: all 5s;

    &:hover {
        position: relative;
        top: -5px;
    }
`
