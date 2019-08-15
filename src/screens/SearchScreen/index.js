// full component
import React, { Component } from 'react';

import { Container, Title } from './styles';
import { Header } from '../../components';

class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header title='Pesquisar' arrowBack />
        <Title>Search</Title>
      </Container>
    );
  }
}

export default SearchScreen;
