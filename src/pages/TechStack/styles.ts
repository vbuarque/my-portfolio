import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
`;

export const Main = styled.main`
    height: 100vh;
    width: 100%;
`;

export const Heading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    width: 100%;
    padding: 25px;
`;

export const TitleHeading = styled.h1`
    font-size: 48px;
    font-weight: bold;
    padding-bottom: 16px;
`;

export const SubtitleHeading = styled.span`
    font-size: 32px;
`;
