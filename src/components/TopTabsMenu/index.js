import React from 'react';

import { Imgs } from '../../assets';
import { Container, ButtonContainer, TextButton, Triangle } from './styles';

const TopTabsMenu = props => {
  return (
    <Container>
      <ButtonContainer onPress={props.active ? null : props.onPressFunc}>
        <TextButton active={props.active}>Login</TextButton>
        {props.active && <Triangle source={Imgs.Triangle} resizeMode='contain' />}
      </ButtonContainer>
      <ButtonContainer onPress={!props.active ? null : props.onPressFunc}>
        <TextButton active={!props.active}>Cadastre-se</TextButton>
        {!props.active && <Triangle source={Imgs.Triangle} resizeMode='contain' />}
      </ButtonContainer>
    </Container>
  );
};

export default TopTabsMenu;

/* 
active recebe a flag view login, 
para dizer qaul tela esta selecionada, 
como so temos duas telas entoa utilizei o barrado
*/
