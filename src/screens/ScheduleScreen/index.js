// full component
import React, { Component } from 'react';
import { Container, Title } from './styles';
import { Header } from '../../components';

class ScheduleScreen extends Component {
  state = {}

  render() {
    return (
      <Container>
        <Header
          title="Agendamento"
          arrowBack
        />
        <Title>Schedule</Title>
      </Container>
    );
  }
}

export { ScheduleScreen };