import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 16px;

    border-radius: 10px;
    border: none;

    background-color: ${props => props.theme.colors.button};
    color: ${props => props.theme.colors.buttonText};

    cursor: pointer;
    
`;

export const Heading = styled.div`
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`;

export const Text = styled.span``;

export const Icon = styled.div``;