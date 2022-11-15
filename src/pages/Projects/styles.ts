import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const HeadTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: ${props => props.theme.colors.text};

    @media (max-width: 560px) {
        font-size: 2rem;
    }

    @media (max-width: 435px) {
        font-size: 1.5rem;
    }
`;

export const HeadSubtitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Subtitle = styled.h2`
    color: ${props => props.theme.colors.text};
    font-weight: 400;
    font-size: 2rem;

    @media (max-width: 560px) {
        font-size: 1rem;
    }

    @media (max-width: 320px) {
        font-size: 12px;
    }
`;

export const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 24px;

    flex-wrap: wrap;
`;