import { useContext } from 'react';

import {Container, ContainerIcon, IconSpacing, SwitchContainer} from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';	
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

interface Props {
    toggleTheme(): void;
}

export function Header({ toggleTheme }: Props) {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <ContainerIcon>
                <IconSpacing>
                    {title === 'light' ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon}/>}
                </IconSpacing>
                <SwitchContainer>
                    <Switch 
                    onChange={toggleTheme}   
                    checked={title === 'dark'}         
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    onHandleColor={shade(0.15, colors.secondary)}
                    offHandleColor={colors.primary}
                    offColor={shade(0.7, colors.secondary)}
                    onColor={colors.secondary}
                />
                </SwitchContainer>
            </ContainerIcon>
            
            
        </Container>
    );
}
