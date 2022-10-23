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

export const TechStackGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 16px;
    padding: 16px;

    max-width: 80%;
    max-height: 80%;

    overflow: auto;

    margin: 0 auto;

    transition: all 0.2s ease-in-out;

    @media (max-width: 560px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 435px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 310px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const GridItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GridImage = styled.img`
    width: 7.25rem;
    height: 100%;
    object-fit: cover;

    @media (max-width: 560px) {
        width: 5.25rem;
    }
`
