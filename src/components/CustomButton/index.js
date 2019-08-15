import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';

import { Container, Description } from './styles';

const Button = props => {
  const { description, press } = props;
  return (
    <Container onPress={press}>
      <Description>{description}</Description>
    </Container>
  );
};

export default Button;
