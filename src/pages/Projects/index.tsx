import { CardItem } from '../../components/CardItem';
import { Container, Title,HeadTitle,HeadSubtitle,Subtitle,ContainerCards } from './styles';

import Gameplay from '../../assets/GamePlay.png';
import Letmeask from '../../assets/LetmeAsk.png';
import Goodticket from '../../assets/GoodTicket.png';
import Rockethelp from '../../assets/RocketHelp.png';

export default function Projects() {
  return (
    <>
    <Container>
        <HeadTitle>
            <Title>Projetos</Title>
        </HeadTitle>
        <HeadSubtitle>
            <Subtitle>Projetos criados com base na minha tech stack</Subtitle>
        </HeadSubtitle>
        <ContainerCards>
            <CardItem title='Game Play' information='Este é um projeto desenvolvido durante a Next Level Week Together, apresentada pela Rocketseat durante o mês de junho de 2021.' image={Gameplay} link='https://github.com/vbuarque/nlw-gameplay'/>

            <CardItem title='Letme Ask' information='Este é um projeto desenvolvido durante a Next Level Week Together, apresentada pela Rocketseat durante o mês de junho de 2021.' image={Letmeask} link='https://github.com/vbuarque/nlw-06-reactjs-letmeask'/>

            <CardItem title='Good Ticket' information='Help Desk desenvolvido para gerenciar o ciclo de vida de um chamado, aplicando segurança com autorização e autenticação JWT.' image={Goodticket} link='https://github.com/Grupo2-DSM/Api-3dsm-2022'/>

            <CardItem title='Rocket Help' information='App em React Native desenvolvido durante o evento Ignite Lab da RocketSeat.' image={Rockethelp} link='https://github.com/vbuarque/ignitelab-rockethelp'/>
        </ContainerCards>
    </Container>
    </>
  );
}