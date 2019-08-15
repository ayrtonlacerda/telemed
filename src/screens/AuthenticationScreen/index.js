import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Contain, ContainImage, ImageLogo, Main, Text } from './styles';
import { TopTabsMenu } from '../../components';
import { Imgs } from '../../assets';
import { Login } from './LoginScreen';
import { Register } from './RegisterScreen';

class AuthScreen extends Component {
  state = {
    viewLogin: true,
  };

  render() {
    const { viewLogin } = this.state;
    return (
      <Contain>
        <StatusBar color='#fff' stbarStyles='dark-content' />
        <ContainImage>
          <ImageLogo source={Imgs.LogoGreen} resizeMode='contain' />
          <Text>Entre com seu e-mail e senha</Text>
        </ContainImage>
        <Main>
          <TopTabsMenu
            active={viewLogin}
            onPressFunc={() => this.setState({ viewLogin: !viewLogin })}
          />
          {viewLogin ? <Login /> : <Register />}
        </Main>
      </Contain>
    );
  }
}

export { AuthScreen };
