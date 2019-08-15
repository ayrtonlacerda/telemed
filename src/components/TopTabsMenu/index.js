import React from 'react';
import { Container, ButtonContainer, TextButton } from './styles';

const TopTabsMenu = props => {
  return (
    <Container>
      <ButtonContainer onPress={props.active ? null : props.onPressFunc}>
        <TextButton active={props.active}>Login</TextButton>
      </ButtonContainer>
      <ButtonContainer onPress={!props.active ? null : props.onPressFunc}>
        <TextButton active={!props.active}>Cadastre-se</TextButton>
      </ButtonContainer>
    </Container>
  );
};

export { TopTabsMenu };

/* 
active recebe a flag view login, 
para dizer qaul tela esta selecionada, 
como so temos duas telas entoa utilizei o barrado
*/
