import { Container, ContainerAvatar} from "./styles";
import MeAvatar from '../../assets/meAvatar.png';
export function Avatar() {
    return (
        <Container>
            <ContainerAvatar>
                <img src={MeAvatar} alt="Avatar" />
            </ContainerAvatar>
        </Container>
    )
}