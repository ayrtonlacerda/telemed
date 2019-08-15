import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Icon, TextInput, CunstonIcons } from './styles';

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

export default Input;

/* 
se caso receber  image ele usa a
 imagem passada caso contrario o icone,
 contudo tem que passar o name na biblioteca
*/
