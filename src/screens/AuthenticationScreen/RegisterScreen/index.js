// full component

import React, { Component } from 'react';
import { Container, SelectPhoto, TextCamera, Icon } from './styles';

import { Imgs } from '../../../assets';

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
        <SelectPhoto>
          <Icon source={Imgs.CameraImg} resizeMode="contain" />
          <TextCamera>Adicionar Foto</TextCamera>
        </SelectPhoto>
        <Input
          nameIcon="account-outline"
          placeholder="nome"
          autoCorrect={false}
          autoCapitalize="none"
          selectionColor="white"
          value={email}
          onChangeText={text => this.setState({ email: text })}
        />
        <Input
          nameIcon="mail-outline"
          placeholder="e-mail"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          selectionColor="white"
          value={password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Input
          nameIcon="cellphone"
          placeholder="telefone"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          selectionColor="white"
          value={password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Input
          nameIcon="card-text-outline"
          placeholder="cpf"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          selectionColor="white"
          value={password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Input
          nameIcon="lock-outline"
          placeholder="••••••••••"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          selectionColor="white"
          value={password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Input
          nameIcon="city"
          placeholder="••••••••••"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          selectionColor="white"
          value={password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Button description="CADASTRAR" />
      </Container>
    );
  }
}

export { Register };
