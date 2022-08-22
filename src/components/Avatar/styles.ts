import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height:calc(100vh - 60px);
`
export const ContainerAvatar = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
    background-color: ${props => props.theme.colors.avatar};

    border-radius: 9999px;
    overflow: hidden;

    img {
        width: 400px;
        height: 530px;
        position: absolute;
        top: 30px;
        left: 50px;
    }

    @media (max-width: 1200px) {
        width: 400px;
        height: 400px;

        img {
            width: 300px;
            height: 430px;
            position: absolute;
            top: 30px;
            left: 50px;
        }
    }

    @media (max-width: 1080px) {
        width: 300px;
        height: 300px;
        
        img {
            width: 250px;
            height: 330px;
            position: absolute;
            top: 30px;
            left: 30px;
        }
    }
`