import React from 'react';
import { Container, Icon, TextInput, CunstonIcons } from './styles';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Input = props => {
  const { image, nameIcon } = props;
  return (
    <Container>
      {image ? (
        <Icon source={image} resizeMode='contain' />
      ) : (
        <CunstonIcons name={nameIcon} size={28} />
      )}
      <TextInput {...props} />
    </Container>
  );
};

export { Input };
