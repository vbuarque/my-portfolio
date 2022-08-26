import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
`;

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: calc(100vh - 60px);

    padding: 0px 50px 0px 50px;

    @media (max-width: 975px) {
        justify-content: center; 
        flex-direction: column-reverse;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;

    @media (max-width: 975px) {
        margin-top: 32px;
    }
`;

export const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (max-width: 975px) {
        align-items: center;
        justify-content: center; 
    }
`;

export const TextPrimary  = styled.span`
    font-size: 48px; 
    font-weight: 100;

    @media (max-width: 550px) {
        font-size: 32px;
        
        svg {
            width: 32px;
            height: 32px;
        }
    }

    @media (max-width: 365px) {
        font-size: 25px;
        
        svg {
            width: 25px;
            height: 25px;
        }
    }
`;

export const TextSecondary = styled.span`
    font-size: 48px;
    font-weight: 100;

    @media (max-width: 550px) {
        font-size: 32px;
    }

    @media (max-width: 365px) {
        font-size: 25px;
    }
`;

export const TextThird  = styled.span`
    font-size: 48px;
    font-weight: bold;
    text-decoration: underline;

    @media (max-width: 550px) {
        font-size: 32px;
    }

    @media (max-width: 390px) {
        font-size: 25px;
    }
`;

export const ContainerText = styled.div`
    display: flex;
    align-items: center;
`;

export const Subtitle = styled.div`
    margin-top: 32px;

    @media (max-width: 550px) {
        margin-top: 16px;
    }
`;

export const TextSubtitle = styled.span`
    font-size: 32px;
    font-weight: 100;

    @media (max-width: 675px) {
        font-size: 25px;
    }

    @media (max-width: 550px) {
        font-size: 20px;
    }

    @media (max-width: 495px) {
        font-size: 16px;
    }

    @media (max-width: 390px) {
        font-size:12px;
    }
`;

export const SectionAvatar = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const AvatarSubtitle = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
`;

export const AvatarTextSubtitle = styled.span`
    margin-left: 8px;
    font-size: 18px;
`;

export const SectionContact = styled.section`
    margin-top: 8px;
`;

export const LinkedinLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    margin: 8px;
`;

export const GithubLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    margin: 8px;
`;

export const TwitterLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    margin: 8px;
`;

