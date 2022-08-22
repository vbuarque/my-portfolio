import {Button as StyledButton, Heading, Text, Icon} from './styles';
import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    icon: JSX.Element;
};

export default function Button({ title, icon, ...rest }: Props) {
    return(
        <StyledButton {...rest}>
            <Heading>
                <Text>
                    {title}
                </Text>
            </Heading>
            <Icon>
                {icon}
            </Icon>
        </StyledButton>
    )
}