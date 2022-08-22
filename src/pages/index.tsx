import { Avatar } from "../components/Avatar";
import { Container, LeftContent, RightContent, SpanTitle, SpanSubtitle, MainContent, Footer, Button as ButtonStyled} from "./styles";

import { HandWaving, CaretDown, CaretDoubleRight } from 'phosphor-react';
import Button from "../components/Button";


export default function MainPage() {
  return (
    <Container>
      <MainContent>
        <LeftContent>
            <SpanTitle>
              Olá, me chamo <b><u>Vinicius Buarque</u></b>
              <HandWaving />
            </SpanTitle>

            <SpanSubtitle>
              Desenvolvedor web/mobile
            </SpanSubtitle>

            <a href="https://linktr.ee/vbuarque">
              <Button title="Entre em contato" icon={<CaretDoubleRight width={49} height={49}/>} />
            </a>
        </LeftContent>
          
        <RightContent>
            <Avatar />
        </RightContent>

        <Footer>
          <ButtonStyled>
            <CaretDown />
          </ButtonStyled>
        </Footer>
      </MainContent>
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