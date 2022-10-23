import { Avatar } from "../../components/Avatar";
import { 
  Container, 
  Main, 
  Section, 
  SectionAvatar, 
  TitleSection, 
  TextPrimary, 
  TextSecondary, 
  TextThird,
  ContainerText,
  Subtitle, 
  TextSubtitle,
  AvatarSubtitle,
  AvatarTextSubtitle,
  SectionContact,
  LinkedinLink,
  GithubLink,
  TwitterLink
 } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPeace, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function WelcomePage() {
  return (
    <Container>
      <Main>
        <Section>
          <TitleSection>
            <TextPrimary>
              Olá <FontAwesomeIcon icon={faHandPeace} />,
            </TextPrimary>

            <TextSecondary>
              Me chamo 
            </TextSecondary>

            <ContainerText>
              <TextThird>
                Vinicius Buarque
              </TextThird>
            </ContainerText>
          </TitleSection>

          <Subtitle>
            <TextSubtitle>
              Estudante e desenvolvedor web/mobile.
            </TextSubtitle>
          </Subtitle>
        </Section>

        <SectionAvatar>
          <Avatar />
          <AvatarSubtitle>
            <FontAwesomeIcon icon={faMapPin}/>
              <AvatarTextSubtitle>
                São José dos Campos - SP
              </AvatarTextSubtitle>
          </AvatarSubtitle>

          <SectionContact>
              <LinkedinLink href='https://www.linkedin.com/in/vbgusmao/' target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
              </LinkedinLink>

              <GithubLink href='https://github.com/vbuarque' target='_blank'>
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </GithubLink>

              <TwitterLink href='https://twitter.com/vbuarqu3' target='_blank'>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </TwitterLink>
          </SectionContact>
        </SectionAvatar>
      </Main>
    </Container>
  );
}