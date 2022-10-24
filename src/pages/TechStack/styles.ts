import styled from 'styled-components';

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

    @media (max-width: 435px) {
        padding-top: 50px;
    }
`;

export const TitleHeading = styled.h1`
    font-size: 48px;
    font-weight: bold;
    padding-bottom: 16px;

    @media (max-width: 560px) {
        font-size: 32px;
    }

    @media (max-width: 435px) {
        font-size: 24px;
    }
`;

export const SubtitleHeading = styled.span`
    font-size: 32px;

    @media (max-width: 560px) {
        font-size: 24px;
    }

    @media (max-width: 435px) {
        font-size: 16px;
    }

    @media (max-width: 310px) {
        font-size: 12px;
    }
`;
