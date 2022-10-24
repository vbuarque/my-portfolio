import styled from 'styled-components';

export const TechStackGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 16px;
    
    padding: 150px 16px 16px 16px;

    max-width: 80%;
    max-height: 80%;

    overflow: auto;

    margin: 0 auto;

    transition: all 0.2s ease-in-out;

    @media (max-width: 560px) {
        grid-template-columns: repeat(3, 1fr);

        padding: 100px 16px 16px 16px;
    }

    @media (max-width: 435px) {
        grid-template-columns: repeat(2, 1fr);

        padding: 50px 16px 16px 16px;
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