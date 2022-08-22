import { useContext } from 'react';

import {Container, ContainerIcon, HeaderTitle} from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';	
import { Sun, Moon } from 'phosphor-react';

interface Props {
    toggleTheme(): void;
}

export function Header({ toggleTheme }: Props) {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <HeaderTitle>
                <span>VB</span>
            </HeaderTitle>
            
            <ContainerIcon>
                    {title === 'light' ? <Sun width={20} height={20}/> : <Moon width={20} height={20}/>}
                    
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
            </ContainerIcon>
            
            
        </Container>
    );
}
