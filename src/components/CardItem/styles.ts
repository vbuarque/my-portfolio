import styled from 'styled-components' ;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 320px;
    height: 620px;
    margin: 24px;

    background: ${props => props.theme.colors.background};

    border: 1px solid ${props => props.theme.colors.text};
    border-radius: 8px;
    box-shadow: 0px 10px 16px 0px rgba(41,41,46,0.4);
`;

export const CardImage = styled.img`
    width: 100%;
    height: 50%;
    border-radius: 8px 8px 0 0;

    background-color: #fff;
`;

export const CardInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    height: 50%;
    padding: 16px;

    text-align: center;
`;

export const CardInformationTitle = styled.h1`
    font-size: 1.3rem;
    margin: 8px 0;
`;

export const CardInformationDescription = styled.p``;

export const CardLink = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Link = styled.a`
    cursor: pointer;
`;