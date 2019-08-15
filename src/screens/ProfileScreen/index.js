// full component

import React, { Component } from 'react';
import { Container, Title } from './styles';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Title>Profile</Title>
      </Container>
    );
  }
}

export default ProfileScreen;
