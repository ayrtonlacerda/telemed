// full component

import React, { Component } from 'react';
import { Container } from './styles';

import { Input, Button } from '../../../components';

class Register extends Component {
  state = {
    email: null,
    password: null,
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <Input
          nameIcon='person-outline'
          placeholder='example@example.com'
          autoCorrect={false}
          autoCapitalize='none'
          selectionColor='white'
          value={email}
          onChangeText={text => this.setState({ email: text })}
        />
        <Input
          nameIcon='lock-outline'
          placeholder='••••••••••'
          secureTextEntry
          autoCorrect={false}
          autoCapitalize='none'
          selectionColor='white'
          value={password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Input
          nameIcon='lock-outline'
          placeholder='••••••••••'
          secureTextEntry
          autoCorrect={false}
          autoCapitalize='none'
          selectionColor='white'
          value={password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Input
          nameIcon='lock-outline'
          placeholder='••••••••••'
          secureTextEntry
          autoCorrect={false}
          autoCapitalize='none'
          selectionColor='white'
          value={password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Input
          nameIcon='lock-outline'
          placeholder='••••••••••'
          secureTextEntry
          autoCorrect={false}
          autoCapitalize='none'
          selectionColor='white'
          value={password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Input
          nameIcon='lock-outline'
          placeholder='••••••••••'
          secureTextEntry
          autoCorrect={false}
          autoCapitalize='none'
          selectionColor='white'
          value={password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Button description='CADASTRAR' />
      </Container>
    );
  }
}

export { Register };
