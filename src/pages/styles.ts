import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`

export const ContainerLeftSide = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 4;
`

export const ContainerRightSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
`
export const ContainerText = styled.div`
    display: flex;
    margin-left: 70px;
    flex-direction: column;
`

export const Span = styled.span`
    font-size: 32px;
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;

    margin-right: 5px;
`

export const SpanName = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 32px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;

    text-decoration: underline;
`

export const WelcomeText = styled.div`
    display: flex;
    align-items: center;
`

export const SpanSubtitle = styled.span`
    font-size: 18px;
    margin-top: 13px;
`

export const ContainerButton = styled.div`
    margin: 80px 0 0 70px;
    max-width: 450px;
    width: 100%;

    a{
        text-decoration: none;
    }
`

export const Footer = styled.div`
    display: flex;
    justify-content: center;

    position: absolute;
    bottom: 0;

    width: 100%;
`