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
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TextPrimary  = styled.span`
    font-size: 48px; 
    font-weight: 100;
`;

export const TextSecondary = styled.span`
    font-size: 48px;
    font-weight: 100;
`;

export const TextThird  = styled.span`
    font-size: 48px;
    font-weight: bold;
`;

export const ContainerText = styled.div`
    display: flex;
    align-items: center;
`;

export const Subtitle = styled.div`
    margin-top: 32px;
`;

export const TextSubtitle = styled.span`
    font-size: 32px;
    font-weight: 100;
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

