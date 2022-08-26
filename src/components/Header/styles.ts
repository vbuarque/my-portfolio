import styled from 'styled-components';

export const Container = styled.div`
    height: 60px; 
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    color: ${props => props.theme.colors.text};
`;

export const ContainerIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconSpacing = styled.div`
    margin-right: 16px;
`;

export const SwitchContainer = styled.div``;