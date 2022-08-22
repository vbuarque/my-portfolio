import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    color: ${props => props.theme.colors.text};
`;

export const ContainerIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderTitle = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 99999px;
    background: ${props => props.theme.colors.avatar};

    font-size: 15px;
    color: ${props => props.theme.colors.buttonText};
`;