import React from 'react';
import { Container, Description } from './styles';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Button = props => {
  const { description, press } = props;
  return (
    <Container onPress={press}>
      <Description>{description}</Description>
    </Container>
  );
};

export { Button };
