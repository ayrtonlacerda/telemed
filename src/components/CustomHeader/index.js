// full component
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { colors } from '../../styles';

import { 
  Container,
  Title,
  SlapHole,
  ArrowBack
} from './styles';

class Header extends Component {
  state = {}

  render() {
    const { arrowBack, title } = this.props;
    return (
      <Container>
        <StatusBar backgroundColor={colors.SECONDARY_COLOR} barStyle="light-content"/>
        {
          arrowBack 
            ? <ArrowBack name="arrow-left" size={28} color={colors.WHITE} />
            : <SlapHole />
        }        
        <Title>{title}</Title>
        <SlapHole />
      </Container>

    );
  }
}

export { Header };