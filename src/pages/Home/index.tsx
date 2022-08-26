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

import { HandWaving, MapPin, LinkedinLogo, GithubLogo, TwitterLogo } from 'phosphor-react';

export default function WelcomePage() {
  return (
    <Container>
      <Main>
        <Section>
          <TitleSection>
            <TextPrimary>
              Olá <HandWaving size={48} weight="thin"/>,
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
              <MapPin size={25} weight="thin"/>
              <AvatarTextSubtitle>
                São José dos Campos - SP
              </AvatarTextSubtitle>
          </AvatarSubtitle>

          <SectionContact>
              <LinkedinLink href='https://www.linkedin.com/in/vbgusmao/' target='_blank'>
                <LinkedinLogo size={48} weight="fill"/>
              </LinkedinLink>

              <GithubLink href='https://github.com/vbuarque' target='_blank'>
                <GithubLogo size={48} weight="fill"/>
              </GithubLink>

              <TwitterLink href='https://twitter.com/vbuarqu3' target='_blank'>
                  <TwitterLogo size={48} weight="fill"/>
              </TwitterLink>
          </SectionContact>
        </SectionAvatar>
      </Main>
    </Container>
  );
}