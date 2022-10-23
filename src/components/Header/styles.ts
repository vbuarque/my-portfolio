import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;

    height: 60px;
    width: 100%;
    padding: 0 30px;

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