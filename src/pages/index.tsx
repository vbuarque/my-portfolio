import { Avatar } from "../components/Avatar";
import { 
  Container, 
  Main, 
  Section, 
  SectionAvatar, 
  Title, 
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



export default function MainPage() {
  return (
    <Container>
      <Main>
        <Section>
          <Title>
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
          </Title>

          <Subtitle>
            <TextSubtitle>
              Estudante e Desenvolvedor web/mobile.
            </TextSubtitle>
          </Subtitle>
        </Section>

        <SectionAvatar>
          <Avatar />
          <AvatarSubtitle>
              <MapPin size={18} weight="thin"/>
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





























{/* <ContainerLeftSide>
        <ContainerText>
            <WelcomeText>
                <Span>Olá, Me chamo</Span>
                <SpanName>
                    Vinicius Buarque
                    <HandWaving width={42} height={42}/>
                </SpanName>
            </WelcomeText>
            <WelcomeText>
                <SpanSubtitle>Desenvolvedor web/mobile</SpanSubtitle>
            </WelcomeText>
        </ContainerText>
        <ContainerButton>
          <a href="https://linktr.ee/vbuarque" target="__blank">
            <Button title="Entre em contato" icon={<CaretDoubleRight width={49} height={49}/>}/>
          </a>
        </ContainerButton>
      </ContainerLeftSide>

      <ContainerRightSide>
            <Avatar />
      </ContainerRightSide>
      
      <Footer>
          <CaretDown width={100} height={80}/>
      </Footer> */}