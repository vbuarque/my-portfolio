import styled from "styled-components"

export const ContainerAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    background-color: ${props => props.theme.colors.avatar};

    border-radius: 999px;
    overflow: hidden;

    img{
        height: 400px;
        position: relative;
        top: 45px;
    }

    @media (max-width: 1080px) {
        width: 300px;
        height: 300px;
        
        img {
            
            height: 330px;
        }
    }

    @media (max-width: 400px) {
        width: 250px;
        height: 250px;
        
        img {
            
            height: 250px;
        }
    }
`