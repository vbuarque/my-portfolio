import { Avatar } from "../components/Avatar";
import { Container, ContainerLeftSide, ContainerRightSide, ContainerText, Span, SpanName, WelcomeText, SpanSubtitle, ContainerButton, Footer} from "./styles";

import Button from "../components/Button";

import { HandWaving, CaretDoubleRight, CaretDown } from "phosphor-react"; 

export default function MainPage() {
  return (
    <Container>
      <ContainerLeftSide>
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
      </Footer>
    </Container>
  );
}
