import {Button as StyledButton, Heading, Text, Icon} from './styles';

type Props = {
    title: string;
    icon: JSX.Element;
};

export default function Button({ title, icon }: Props) {
    return(
        <StyledButton>
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