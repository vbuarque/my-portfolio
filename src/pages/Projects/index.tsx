import { CardItem } from '../../components/CardItem';
import { Container, Title,HeadTitle,HeadSubtitle,Subtitle,ContainerCards } from './styles';

export function Projects() {
  return (
    <Container>
        <HeadTitle>
            <Title>Projetos</Title>
        </HeadTitle>
        <HeadSubtitle>
            <Subtitle>Projetos criados com base na minha tech stack</Subtitle>
        </HeadSubtitle>
        <ContainerCards>
            <CardItem title='Teste' information='Help Desk desenvolvido para gerenciar o ciclo de vida de um chamado, aplicando segurança com autorização e autenticação JWT ' image=''/>

            <CardItem title='Teste' information='Help Desk desenvolvido para gerenciar o ciclo de vida de um chamado, aplicando segurança com autorização e autenticação JWT ' image=''/>

            <CardItem title='Teste' information='Help Desk desenvolvido para gerenciar o ciclo de vida de um chamado, aplicando segurança com autorização e autenticação JWT ' image=''/>

            <CardItem title='Teste' information='Help Desk desenvolvido para gerenciar o ciclo de vida de um chamado, aplicando segurança com autorização e autenticação JWT ' image=''/>

            <CardItem title='Teste' information='Help Desk desenvolvido para gerenciar o ciclo de vida de um chamado, aplicando segurança com autorização e autenticação JWT ' image=''/>

            <CardItem title='Teste' information='Help Desk desenvolvido para gerenciar o ciclo de vida de um chamado, aplicando segurança com autorização e autenticação JWT ' image=''/>

        </ContainerCards>
    </Container>
  );
}