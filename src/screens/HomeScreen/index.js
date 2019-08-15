// full component
import React, { Component } from 'react';
import { Container, Title } from './styles';

class HomeScreen extends Component {
  state = {}

  render() {
    return (
      <Container>        
        <Title>Home</Title>
      </Container>
    );
  }
}

export { HomeScreen };