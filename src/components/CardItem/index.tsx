import { Card, CardImage, CardInformation, CardInformationTitle, CardInformationDescription, CardLink, Link } from './styles';

import myImage from '../../assets/svg/MockImage.svg';

type CardItemProps = {
    title: string;
    information: string;
    link?: string;
    image: string;
}

export function CardItem({title, information, link, image}: CardItemProps) {
  return (
    <Card>
        <CardImage src={image ? image : myImage} alt="Imagem do projeto" />
        
        <CardInformation>
            <CardInformationTitle>{title}</CardInformationTitle>
            <CardInformationDescription>{information}</CardInformationDescription>
        </CardInformation>

        <CardLink>
            <Link href={link} target="_blank" rel="noreferrer">Ver código</Link>
        </CardLink>
    </Card>
  );
}