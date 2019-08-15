// full component
import React, { Component } from 'react';
import { Container, Title } from './styles';
import { Header } from '../../components';

class SearchScreen extends Component {
  state = {}

  render() {
    return (
      <Container>
        <Header
          title="Pesquisar"
          arrowBack
        />
        <Title>Search</Title>
      </Container>
    );
  }
}

export { SearchScreen };