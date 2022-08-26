import { ContainerAvatar } from "./styles";
import MeAvatar from '../../assets/meAvatar.png';
export function Avatar() {
    return (
        <ContainerAvatar>
            <img src={MeAvatar} alt="Avatar" />
        </ContainerAvatar>
    )
}